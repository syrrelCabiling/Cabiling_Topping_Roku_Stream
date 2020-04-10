<?php
    require_once '../load.php';
    // confirm_logged_in();

    if (isset($_GET['media'])) {
        $tbl = "tbl_" . trim($_GET["media"]);
       // echo $tbl;
    }

        if (isset($_GET['filter'])) {
            //Filter
            $tbl = "tbl_" . trim($_GET["filter"]);
            $args = array(
                'tbl' => 'tbl_mov_genre',
                'col' => 'genre_id',
                'col2' => 'movie_id',
                'col3' => 'genre_name',
                'filter' => $_GET['filter'],
            );
            
            $results = getMoviesByFilter($args);

            echo json_encode($results);

        } else {

            $results = getAllGenre($tbl);

            echo json_encode($results);
           
        }



// if (isset($_GET['filter'])) {
//     //Filter
//     $args = array(
//         'tbl' => 'tbl_movies',
//         'tbl2' => 'tbl_genre',
//         'tbl3' => 'tbl_mov_genre',
//         'col' => 'movies_id',
//         'col2' => 'genre_id',
//         'col3' => 'genre_name',
//         'filter' => $_GET['filter'],
//     );
//     $getMovies = getMoviesByFilter($args);
// } else {
//     $movie_table = 'tbl_movies';
//     $getMovies = getAll($movie_table);
// }
    
// ?>
