<?php

function countPairs(array $numbers): int
{
    $map = [];

    foreach ($numbers as $number) {
        $map[$number] ??= 0;
        $map[$number]++;
    }

    $result = 0;

    foreach ($map as $count) {
        $result += ($count * ($count - 1)) / 2;
    }

    return $result;
}

var_dump(countPairs([1, 2, 3, 2, 3, 2, 1])); // int(5)
