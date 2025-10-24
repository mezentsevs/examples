<?php

function countMaxNumberOfBanana(string $str): int
{
    $length = strlen($str);
    $map = [];

    for ($i = 0; $i < $length; $i++) {
        $char = $str[$i];
        $map[$char] ??= 0;
        $map[$char]++;
    }

    $requiredChars = [
        'B' => 1,
        'a' => 3,
        'n' => 2,
    ];

    $result = PHP_INT_MAX;

    foreach ($requiredChars as $char => $charsPerWord) {
        $maxWords = $map[$char] / $charsPerWord;
        $maxWords = (int)$maxWords;
        $result = min($result, $maxWords);
    }

    return $result;
}

echo countMaxNumberOfBanana('BanaQnaBaQQnanaQQQBan'); // 2
