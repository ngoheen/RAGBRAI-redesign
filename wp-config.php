<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information by
 * visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */

//define('DB_NAME', 'dev_rag_cms');
define('DB_NAME', 'rag_cms');

/** MySQL database username */
define('DB_USER', 'ragbraiCMS');

/** MySQL database password */
define('DB_PASSWORD', 'r@gBra!CM5');

/** MySQL hostname */
//define('DB_HOST', 'des-digital02.dmreg.com');
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'A.bLAB5EwyY$iqOdHl`I|!4y6w#j#Fb3TDLPt4=%Q-mOCm>o:[PxO[hVb+z+mx%%');
define('SECURE_AUTH_KEY', 'JKa_kB+DxU7Ot}PTvOq@Y5)q+.w&4I ^h{ve+821BU[Ed^4F}1S&E(QqtvC6|oSg');
define('LOGGED_IN_KEY', 'A^PeP-|kAR7{*`+OGm./,o[zTbV{mSP/Dtp 3?b[Oh=QSlV+!9+Pr?(?k|FH<)rL');
define('NONCE_KEY', 'Fc+}uN(.Ei|h9-IUo+@fMd<zC|nACaBNVk9bzt4hIE{8As/ks}z]BmG8gYauKx+$');
define('AUTH_SALT', 'H+@D[nk]_><ZiKZT>Q:|)D+X}F+af~8b)<vo8v(V& l<aNvL>g%|EK:V,NiN*I+?');
define('SECURE_AUTH_SALT', '6sX-;Une4[d0K|vcI5%_>l`/Wbk5pk`,-lUVgQnL dPHZ$5McR5FZsN.GZq+/As!');
define('LOGGED_IN_SALT', 'xmt@2>]P>Skd#SE9Ga+8cKXyncH*Y6DU!<[-vH>vP_])~]3i;u0%oEH0(7=Fv9_Y');
define('NONCE_SALT', 'D`X`Jv-|&l:j_!s94nv 3%*wd{XIb{M6=m`0D_rz%/qQ7nxR{ZIFYy+_-ZYg#~eM');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'cms_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress.  A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de.mo to wp-content/languages and set WPLANG to 'de' to enable German
 * language support.
 */
define ('WPLANG', '');
define( 'COOKIEPATH', '/' );
define('WP_DEBUG', false);
define('SAVEQUERIES', true);
define('SCRIPT_DEBUG', true);
define('FORCE_SSL_ADMIN', true);

define('FS_CHMOD_DIR', (0755 & ~ umask()));
define('FS_CHMOD_FILE', (0644 & ~ umask()));
/* That's all, stop editing! Happy blogging. */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
?>
