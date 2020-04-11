<?php
require_once '../load.php';

if (isset($_GET['media'])){
    $tbl = "tbl_" . trim($_GET["media"]);
    //echo $tbl;
}

if (isset($_GET['filterShows'])) {
    //Filter
    $args = array(
        'tbl' => $tbl,
        'tbl2' => 'tbl_genre',
        'tbl3' => 'tbl_shows_genre',
        'col' => 'shows_id',
        'col2' => 'genre_id',
        'col3' => 'genre_name',
        'filterShows' => $_GET['filterShows']
    );
    $results = getTvByFilter($args);
    echo json_encode($results->fetchAll(PDO::FETCH_ASSOC));
} else {
    $results = getAll($tbl);
    echo json_encode($results);
}