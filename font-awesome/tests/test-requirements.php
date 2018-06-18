<?php
    require_once('vendor/autoload.php');
    use Composer\Semver\Semver;
// Cases TODO:
// - client with name only, accepting all defaults
// - webfont method + pseudo-elements should be compatible
// - webfont method and forbid pseudo-elements should warn but not die, cause you can't disable that
class RequirementsTest extends WP_UnitTestCase {

  /**
   * @before
   */
  function reset(){
    FontAwesome()->reset();
    wp_script_is('font-awesome-official', 'enqueued') && wp_dequeue_script('font-awesome-official');
    wp_script_is('font-awesome-official-v4shim', 'enqueued') && wp_dequeue_script('font-awesome-official-v4shim');
    wp_style_is('font-awesome-official', 'enqueued') && wp_dequeue_style('font-awesome-official');
    wp_style_is('font-awesome-official-v4shim', 'enqueued') && wp_dequeue_style('font-awesome-official-v4shim');
  }

  function assert_defaults($loadSpec){
      $this->assertEquals('webfont', $loadSpec['method']);
      $this->assertTrue($loadSpec['v4shim']);
      $this->assertTrue($loadSpec['pseudo-elements']);
  }

  function test_all_default_with_single_client(){
    FontAwesome()->register(array(
      'name' => 'test'
    ));

    $enqueued = false;
    $enqueued_callback = function($loadSpec) use(&$enqueued){
      $enqueued = true;
      $this->assert_defaults($loadSpec);
    };
    add_action('font_awesome_enqueued', $enqueued_callback);

    $failed = false;
    $failed_callback = function($data) use(&$failed){
      $failed = true;
    };
    add_action('font_awesome_failed', $failed_callback);

    FontAwesome()->load();

    $this->assertFalse($failed);
    $this->assertTrue($enqueued);
    $this->assertTrue(wp_style_is('font-awesome-official', 'enqueued'));
    $this->assertTrue(wp_style_is('font-awesome-official-v4shim', 'enqueued'));
  }

  function test_all_default_with_multiple_clients(){
    FontAwesome()->register(array(
      'name' => 'Client A'
    ));

    FontAwesome()->register(array(
      'name' => 'Client B'
    ));

    $enqueued = false;
    $enqueued_callback = function($loadSpec) use(&$enqueued){
      $enqueued = true;
      $this->assert_defaults($loadSpec);
    };
    add_action('font_awesome_enqueued', $enqueued_callback);

    $failed = false;
    $failed_callback = function($data) use(&$failed){
      $failed = true;
    };
    add_action('font_awesome_failed', $failed_callback);

    FontAwesome()->load();

    $this->assertFalse($failed);
    $this->assertTrue($enqueued);
    $this->assertTrue(wp_style_is('font-awesome-official', 'enqueued'));
    $this->assertTrue(wp_style_is('font-awesome-official-v4shim', 'enqueued'));
  }

  function test_register_without_name(){
    $this->expectException(InvalidArgumentException::class);

    FontAwesome()->register(array(
      'method' => 'svg',
      'v4shim' => 'require'
    ));

    $enqueued = false;
    $enqueued_callback = function($loadSpec) use(&$enqueued){
      $enqueued = true;
    };
    add_action('font_awesome_enqueued', $enqueued_callback);

    $failed = false;
    $failed_callback = function($data) use(&$failed){
      $failed = true;
    };
    add_action('font_awesome_failed', $failed_callback);

    FontAwesome()->load();

    // We don't expect either callback to be invoked because throwing the
    // InvalidArgumentException preempts further processing.
    $this->assertFalse($failed);
    $this->assertFalse($enqueued);
  }

  function test_single_client_gets_what_it_wants() {
    add_action('font_awesome_requirements', function(){
      FontAwesome()->register(array(
        'name' => 'test',
        'method' => 'svg',
        'v4shim' => 'require'
      ));
    });

    $enqueued = false;
    $enqueued_callback = function($loadSpec) use(&$enqueued){
      $enqueued = true;
      $this->assertEquals('svg', $loadSpec['method']);
      $this->assertTrue($loadSpec['v4shim']);
    };
    add_action('font_awesome_enqueued', $enqueued_callback);

    FontAwesome()->load();
    $this->assertTrue($enqueued);
  }

  function test_two_compatible_clients() {
    add_action('font_awesome_requirements', function(){

      FontAwesome()->register(array(
        'name' => 'clientA',
        'method' => 'svg',
        'v4shim' => 'require'
      ));

      FontAwesome()->register(array(
        'name' => 'clientB',
        'method' => 'svg'
        // leaves v4shim alone
      ));
    });

    add_action('font_awesome_enqueued', function($loadSpec){
      $this->assertEquals('svg', $loadSpec['method']);
      $this->assertTrue($loadSpec['v4shim']);
    });

    FontAwesome()->load();
  }

  function test_incompatible_method() {
    add_action('font_awesome_requirements', function(){

      FontAwesome()->register(array(
        'name' => 'clientA',
        'method' => 'svg'
      ));

      FontAwesome()->register(array(
        'name' => 'clientB',
        'method' => 'webfont' // not compatible with svg
      ));
    });

    $enqueued = false;
    $enqueued_callback = function() use(&$enqueued){
      $enqueued = true;
    };
    add_action('font_awesome_enqueued', $enqueued_callback);

    $failed = false;
    $failed_callback = function($data) use(&$failed){
      $failed = true;
      $this->assertEquals('method', $data['req']);
      $this->assertTrue($this->client_requirement_exists('clientB', $data['client-reqs']));
    };
    add_action('font_awesome_failed', $failed_callback);

    $this->assertNull(FontAwesome()->load());
    $this->assertTrue($failed);
    $this->assertFalse($enqueued);
  }

  function test_pseudo_element_default_false_when_svg(){
    add_action('font_awesome_requirements', function(){
      FontAwesome()->register(array(
        'name' => 'test',
        'method' => 'svg'
      ));
    });

    add_action('font_awesome_enqueued', function($loadSpec){
      $this->assertEquals('svg', $loadSpec['method']);
      $this->assertFalse($loadSpec['pseudo-elements']);
    });

    FontAwesome()->load();
  }

  function test_pseudo_element_default_true_when_webfont(){
    add_action('font_awesome_requirements', function(){
      FontAwesome()->register(array(
        'name' => 'test',
        'method' => 'webfont'
      ));
    });

    add_action('font_awesome_enqueued', function($loadSpec){
      $this->assertEquals('webfont', $loadSpec['method']);
      $this->assertTrue($loadSpec['pseudo-elements']);
    });

    FontAwesome()->load();
  }

  /**
   * @group version
   */
  function test_incompatible_version() {
    add_action('font_awesome_requirements', function(){

      FontAwesome()->register(array(
        'name' => 'clientA',
        'version' => '5.0.13'
      ));

      FontAwesome()->register(array(
        'name' => 'clientB',
        'version' => '5.0.12'
      ));
    });

    $enqueued = false;
    $enqueued_callback = function() use(&$enqueued){
      $enqueued = true;
    };
    add_action('font_awesome_enqueued', $enqueued_callback);

    $failed = false;
    $failed_callback = function($data) use(&$failed){
      $failed = true;
      $this->assertEquals('version', $data['req']);
      $this->assertTrue($this->client_requirement_exists('clientB', $data['client-reqs']));
    };
    add_action('font_awesome_failed', $failed_callback);

    $this->assertNull(FontAwesome()->load());
    $this->assertTrue($failed);
    $this->assertFalse($enqueued);
  }

  function client_requirement_exists($name, $reqs){
    $found = false;
    foreach($reqs as $req){
      if($name == $req['name']){
        $found = true;
        break;
      }
    }
    return $found;
  }

  // This is here mainly to provide development notes about what kind of
  // results to expect from the Semver library. It does not test our plugin.
  // If anything, it tests the Semver library for regressions in a handful of cases.
  /**
   * @group version
   */
  function test_explore_semver(){
    $this->assertTrue(Semver::satisfies('5.0.13', '5.0.13'));
    $this->assertFalse(Semver::satisfies('5.0.13', '5.0.12'));
    $this->assertTrue(Semver::satisfies('5.0.13', '>5.0.10'));
    $this->assertTrue(Semver::satisfies('5.0.13', '^5.0'));
    $this->assertTrue(Semver::satisfies('5.0.11', '~5.0.10'));
    $this->assertFalse(Semver::satisfies('5.1.0', '~5.0.10'));
    $this->assertTrue(Semver::satisfies('5.1.0', '^5.0.0'));
    $this->assertFalse(Semver::satisfies('5.0.13', '^5.1.0'));


    /**
     * probably we need to provide only stable versions, not development ones,
     * because this doesn't behave as might be expected.
     */
    //$this->assertFalse(Semver::satisfies('5.1.0.11-dev', '^5.0.0-stable'));
  }

  /**
   * @group version
   */
  function test_compatible_with_latest_version() {
    $stub = $this->createMock(FontAwesome::class);
    $stub->method('get_latest_version')
      ->willReturn('5.0.13');

    add_action('font_awesome_requirements', function(){

      FontAwesome()->register(array(
        'name' => 'clientA',
        'version' => '~5.0.0'
      ));

      FontAwesome()->register(array(
        'name' => 'clientB',
        'version' => '>=5.0.12'
      ));

      FontAwesome()->register(array(
        'name' => 'clientC',
        'version' => '^5'
      ));
    });

    $enqueued = false;
    $enqueued_callback = function($data) use(&$enqueued){
      $enqueued = true;
    };
    add_action('font_awesome_enqueued', $enqueued_callback);

    $failed = false;
    $failed_callback = function($data) use(&$failed){
      $failed = true;
    };
    add_action('font_awesome_failed', $failed_callback);

    FontAwesome()->load();
    $this->assertFalse($failed);
    $this->assertTrue($enqueued);
  }

  /**
   * @group version
   */
  function test_compatible_with_earlier_patch_level() {
    $stub = $this->createMock(FontAwesome::class);
    $stub->method('get_available_versions')
      ->willReturn(array(
        '5.1.0',
        '5.0.13',
        '5.0.12',
        '5.0.11',
        '5.0.10',
        '5.0.9',
        '5.0.0'
      ));
    add_action('font_awesome_requirements', function(){

      FontAwesome()->register(array(
        'name' => 'clientA',
        'version' => '~5.0.0'
      ));

      FontAwesome()->register(array(
        'name' => 'clientB',
        'version' => '>=5.0.12'
      ));

      FontAwesome()->register(array(
        'name' => 'clientC',
        'version' => '^5'
      ));
    });

    $enqueued = false;
    $enqueued_callback = function($data) use(&$enqueued){
      $enqueued = true;
    };
    add_action('font_awesome_enqueued', $enqueued_callback);

    $failed = false;
    $failed_callback = function($data) use(&$failed){
      $failed = true;
    };
    add_action('font_awesome_failed', $failed_callback);

    FontAwesome()->load();
    $this->assertFalse($failed);
    $this->assertTrue($enqueued);
  }

  /**
   * @group version
   */
  function test_compatible_with_earlier_minor_version() {
    $stub = $this->createMock(FontAwesome::class);
    $stub->method('get_available_versions')
      ->willReturn(array(
        '5.1.0',
        '5.0.13',
        '5.0.12',
        '5.0.11',
        '5.0.10',
        '5.0.9',
        '5.0.0'
      ));
    add_action('font_awesome_requirements', function(){

      FontAwesome()->register(array(
        'name' => 'clientA',
        'version' => '<=5.1'
      ));

      FontAwesome()->register(array(
        'name' => 'clientB',
        'version' => '>=5.0.10'
      ));
    });

    $enqueued = false;
    $enqueued_callback = function($data) use(&$enqueued){
      $enqueued = true;
    };
    add_action('font_awesome_enqueued', $enqueued_callback);

    $failed = false;
    $failed_callback = function($data) use(&$failed){
      $failed = true;
    };
    add_action('font_awesome_failed', $failed_callback);

    FontAwesome()->load();
    $this->assertFalse($failed);
    $this->assertTrue($enqueued);
  }

  function mock_singleton_method($method, callable $init){
    $mockBuilder = $this->getMockBuilder(FontAwesome::class);
    $mockBuilder->setMethods([$method]); // let all methods work as defined in the original
    $mock = $mockBuilder->getMock();
    $ref = new \ReflectionProperty('FontAwesome', '_instance');
    $ref->setAccessible(true);
    $ref->setValue(null, $mock);
    $init($mock->method($method));
    return $mock;
  }

  /**
   * @group pro
   */
  function test_pro_is_available(){
    $mock = $this->mock_singleton_method('is_pro_available', function($method){
      $method->willReturn(true);
    });

    add_action('font_awesome_requirements', function(){
      FontAwesome()->register(array(
        'name' => 'test'
      ));
    });

    add_action('font_awesome_enqueued', function($loadSpec){
      $this->assertTrue($loadSpec['pro']);
    });

    FontAwesome()->load();
  }

  /**
   * @group pro
   */
  function test_pro_not_available(){
    $mock = $this->mock_singleton_method('is_pro_available', function($method){
      $method->willReturn(false);
    });

    add_action('font_awesome_requirements', function(){
      FontAwesome()->register(array(
        'name' => 'test'
      ));
    });

    add_action('font_awesome_enqueued', function($loadSpec){
      $this->assertFalse($loadSpec['pro']);
    });

    FontAwesome()->load();
  }

  /**
   * @group shim
   */
  function test_shim_svg(){
    add_action('font_awesome_requirements', function(){
      FontAwesome()->register(array(
        'name' => 'test',
        'method' => 'svg',
        'v4shim' => 'require'
      ));
    });

    FontAwesome()->load();
    $this->assertTrue(wp_script_is('font-awesome-official-v4shim', 'enqueued'));
  }

  /**
   * One client requires v4shim. The other does not forbid, but also does not require it.
   * Expected: Client A's requirement should be honored, since Client B does not forbid.
   * @group shim
   */
  function test_shim_webfont(){
    add_action('font_awesome_requirements', function(){
      FontAwesome()->register(array(
        'name' => 'Client A',
        'method' => 'webfont',
        'v4shim' => 'require'
      ));
      FontAwesome()->register(array(
        'name' => 'Client B',
        'method' => 'webfont'
      ));
    });

    FontAwesome()->load();
    $this->assertTrue(wp_style_is('font-awesome-official-v4shim', 'enqueued'));
  }

  /**
   * @group shim
   */
  function test_shim_conflict() {
    add_action('font_awesome_requirements', function(){
      FontAwesome()->register(array(
        'name' => 'Client A',
        'method' => 'webfont',
        'v4shim' => 'require'
      ));
      FontAwesome()->register(array(
        'name' => 'Client B',
        'method' => 'webfont',
        'v4shim' => 'forbid'
      ));
    });

    $enqueued = false;
    $enqueued_callback = function() use(&$enqueued){
      $enqueued = true;
    };
    add_action('font_awesome_enqueued', $enqueued_callback);

    $failed = false;
    $failed_callback = function($data) use(&$failed){
      $failed = true;
      $this->assertEquals('v4shim', $data['req']);
      $this->assertTrue($this->client_requirement_exists('Client B', $data['client-reqs']));
    };
    add_action('font_awesome_failed', $failed_callback);

    $this->assertNull(FontAwesome()->load());
    $this->assertTrue($failed);
    $this->assertFalse($enqueued);
    $this->assertFalse(wp_script_is('font-awesome-official-v4shim', 'enqueued'));
  }
}
