<?php
    require_once '../load.php';
    // confirm_logged_in();

    if (isset($_GET['media'])) {
        $tbl = "tbl_" . trim($_GET["media"]);
       // echo $tbl;
    }

    if (isset($_GET['filter'])) {
    $args = array(
                'tbl' => $tbl,
                'tbl2' => 'tbl_genre',
                'tbl3' => 'tbl_mov_genre',
                'col' => 'movies_id',
                'col2' => 'genre_id',
                'col3' => 'genre_name',
                'filter' => $_GET['filter'],
            );
            
        $results = getMoviesByFilter($args);
        echo json_encode($results->fetchAll(PDO::FETCH_ASSOC));

        } else {

            $results = getAll($tbl);

            echo json_encode($results);
           
        }


