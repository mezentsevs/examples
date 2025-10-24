<?php

function findNthDistinctString(array $arr, int $n): string
{
    $map = [];

    foreach ($arr as $item) {
        $map[$item] ??= 0;
        $map[$item]++;
    }

    foreach ($map as $key => $val) {
        if ($val === 1) {
            $n--;

            if ($n === 0) { return $key; }
        }
    }

    return '';
}

$fruits = ['Lemon', 'Banana', 'Apple', 'Banana', 'Apple', 'Orange'];

echo findNthDistinctString($fruits, 2); // Orange
