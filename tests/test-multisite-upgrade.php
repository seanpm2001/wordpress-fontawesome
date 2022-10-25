<?php
namespace FortAwesome;
/**
 * Class OptionsTest
 *
 * @noinspection PhpCSValidationInspection
 */
// phpcs:ignoreFile Squiz.Commenting.ClassComment.Missing
// phpcs:ignoreFile Generic.Commenting.DocComment.MissingShort
require_once dirname( __FILE__ ) . '/../includes/class-fontawesome-activator.php';
require_once dirname( __FILE__ ) . '/_support/font-awesome-phpunit-util.php';
require_once dirname( __FILE__ ) . '/_support/wp-multi-network-functions.php';
use Yoast\WPTestUtils\WPIntegration\TestCase;

class MultisiteUpgradeTest extends TestCase {
	protected $added_network_ids = array();

	public function set_up() {
		parent::set_up();
		wp_cache_delete ( 'alloptions', 'options' );
		reset_db();
		delete_option( FontAwesome::OPTIONS_KEY );

		/**
		 * We need this to be defined for this test, though it's normally defined in
		 * the top-level loader file that is not being included in this test configuration.
		 */
		if ( ! defined( 'FONTAWESOME_PLUGIN_FILE' ) ) {
			define( 'FONTAWESOME_PLUGIN_FILE', 'font-awesome/index.php' );
		}

		FontAwesome::reset();
		(new Mock_FontAwesome_Metadata_Provider())->mock(
			array(
				wp_json_encode(
					array(
						'data' => graphql_releases_query_fixture(),
					)
				),
				wp_json_encode(
					array(
						'data' => graphql_releases_query_fixture(),
					)
				)
			)
		);

		// This activates network wide, for all sites that exist at the time.
		FontAwesome_Activator::initialize();

		add_action( 'add_network', array( $this, 'handle_add_network' ), 99, 2 );
	}

	public function tear_down() {
		FontAwesome_Metadata_Provider::reset();
		remove_all_actions( 'add_network' );
	}

	public function test_try_upgrade_on_main_network_when_release_metatdata_stored_in_non_main_network() {
		if ( ! is_multisite() ) {
			throw new \Exception();
		}

		/**
		 * As of 4.3.2, the initialize() that will have run in the set_up() above will have put the release metadata
		 * in a network option associated with the main network.
		 * In 4.3.1, it would have been stored in a network option associated with the *current* network
		 * at the time of retrieval and storage.
		 *
		 * So to simulate the scenario that would have been possible in 4.3.1, we'll move it to a non-main network,
		 * such that the release metadata are stored on an option associated with the *current* network at the time
		 * of retrieval and storage.
		 */

		// Create a new, non-main network.
		$new_network_id = self::add_network();
		$main_network_id = get_main_network_id();

		// Get the metadata that would have been stored on a main network option.
		$opt = get_network_option( $main_network_id, FontAwesome_Release_Provider::OPTIONS_KEY );

		// Put it on an option associated with the new network.
		update_network_option( $new_network_id, FontAwesome_Release_Provider::OPTIONS_KEY, $opt );

		// And get rid of the original one on the main network.
		delete_network_option( $main_network_id, FontAwesome_Release_Provider::OPTIONS_KEY );

		$this->assertFalse( get_network_option( $main_network_id, FontAwesome_Release_Provider::OPTIONS_KEY ) );
		$this->assertArrayHasKey( 'refreshed_at', get_network_option( $new_network_id, FontAwesome_Release_Provider::OPTIONS_KEY ) );

		// Clear options cache.
		wp_cache_delete ( 'alloptions', 'options' );

		// Expecting no exception to be thrown.
		$this->assertNull( fa()->try_upgrade() );

		$this->assertFalse( get_network_option( $new_network_id, FontAwesome_Release_Provider::OPTIONS_KEY ) );
		$this->assertArrayHasKey( 'refreshed_at', get_network_option( $main_network_id, FontAwesome_Release_Provider::OPTIONS_KEY ) );
	}

	public function test_try_upgrade_on_non_main_network_when_release_metatdata_stored_in_non_main_network() {
		if ( ! is_multisite() ) {
			throw new \Exception();
		}

		/**
		 * As of 4.3.2, the initialize() that will have run in the set_up() above will have put the release metadata
		 * in a network option associated with the main network.
		 * In 4.3.1, it would have been stored in a network option associated with the *current* network
		 * at the time of retrieval and storage.
		 *
		 * So to simulate the scenario that would have been possible in 4.3.1, we'll move it to a non-main network,
		 * such that the release metadata are stored on an option associated with the *current* network at the time
		 * of retrieval and storage.
		 */

		// Create a new, non-main network.
		$new_network_id = self::add_network();
		$main_network_id = get_main_network_id();

		// Get the metadata that would have been stored on a main network option.
		$opt = get_network_option( $main_network_id, FontAwesome_Release_Provider::OPTIONS_KEY );

		// Put it on an option associated with the new network.
		update_network_option( $new_network_id, FontAwesome_Release_Provider::OPTIONS_KEY, $opt );

		// And get rid of the original one on the main network.
		delete_network_option( $main_network_id, FontAwesome_Release_Provider::OPTIONS_KEY );

		$this->assertFalse( get_network_option( $main_network_id, FontAwesome_Release_Provider::OPTIONS_KEY ) );
		$this->assertArrayHasKey( 'refreshed_at', get_network_option( $new_network_id, FontAwesome_Release_Provider::OPTIONS_KEY ) );

		// Clear options cache.
		wp_cache_delete ( 'alloptions', 'options' );

		// Now switch to that new network.
		\switch_to_network( $new_network_id );
	
		// Expecting no exception to be thrown.
		$this->assertNull( fa()->try_upgrade() );

		$this->assertFalse( get_network_option( $new_network_id, FontAwesome_Release_Provider::OPTIONS_KEY ) );
		$this->assertArrayHasKey( 'refreshed_at', get_network_option( $main_network_id, FontAwesome_Release_Provider::OPTIONS_KEY ) );
	}

	public function handle_add_network( $network_id, $params ) {
		array_push( $this->added_network_ids, $network_id );
	}

	public static function add_network() {
		$sub_domain = dechex( wp_rand( PHP_INT_MIN, PHP_INT_MAX ) );
		$domain     = "$sub_domain.example.com";
		$path       = '/';

		$admin_user = get_users( array( 'role' => 'administrator' ) )[0];
		$result     = \add_network(
			array(
				'domain'           => $domain,
				'path'             => '/',
				'site_name'        => $domain,
				'network_name'     => $domain,
				'user_id'          => $admin_user->ID,
				'network_admin_id' => $admin_user->ID,
			)
		);

		if ( is_wp_error( $result ) ) {
			throw new \Exception( 'failed creating network' );
		}

		return $result;
	}
}
