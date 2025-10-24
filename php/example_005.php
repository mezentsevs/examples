<?php

function isAnagram(string $source, string $target): bool
{
    $sourceLength = strlen($source);
    $targetLength = strlen($target);

    if ($sourceLength !== $targetLength) { return false; }

    $map = [];

    for ($i = 0; $i < $sourceLength; $i++) {
        $char = $source[$i];
        $map[$char] ??= 0;
        $map[$char]++;
    }

    for ($i = 0; $i < $sourceLength; $i++) {
        $char = $target[$i];
        $map[$char] ??= 0;
        $map[$char]--;

        if ($map[$char] < 0) { return false; }
    }

    return true;
}

var_dump(isAnagram('listen', 'silent')); // bool(true)
var_dump(isAnagram('listen', 'length')); // bool(false)
