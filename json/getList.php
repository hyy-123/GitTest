<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);
// 索引数组
$arr1 = array('leo','momo','zhangsen');
echo json_encode($arr1);

/*//关联数组是通过键和值一一对应的
$arr2 = array('username'=>'leo','age'=>32);
echo json_encode($arr2);
*/


// json_encode()将数据结构转成字符串
// json_decode()将字符串转成数据结构