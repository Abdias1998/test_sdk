<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit7985f840f35bc87b168a691b9f92332f
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Feexpay\\FeexpayPhp\\' => 19,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Feexpay\\FeexpayPhp\\' => 
        array (
            0 => __DIR__ . '/..' . '/feexpay/feexpay-php/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit7985f840f35bc87b168a691b9f92332f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit7985f840f35bc87b168a691b9f92332f::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit7985f840f35bc87b168a691b9f92332f::$classMap;

        }, null, ClassLoader::class);
    }
}
