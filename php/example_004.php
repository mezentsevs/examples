<?php

function countLessThenEach(array $numbers): array
{
    $map = array_fill(0, 101, 0);

    foreach ($numbers as $number) {
        $map[$number] ??= 0;
        $map[$number]++;
    }

    for ($i = 1; $i <= 100; $i++) {
        $map[$i] += $map[$i - 1];
    }

    foreach ($numbers as &$number) {
        $number = $map[$number - 1];
    }

    return $numbers;
}

var_dump(countLessThenEach([1, 4, 4, 3, 2, 2, 5]));

/*
array(7) {
  [0]=>
  int(0)
  [1]=>
  int(4)
  [2]=>
  int(4)
  [3]=>
  int(3)
  [4]=>
  int(1)
  [5]=>
  int(1)
  [6]=>
  int(6)
}
*/
