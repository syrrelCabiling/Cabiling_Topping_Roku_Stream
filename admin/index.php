<?php
    require_once '../load.php';
    //confirm_logged_in();
    if (isset($_GET['media'])) {
        $tbl = "tbl_" . trim($_GET["media"]);
       // echo $tbl;
    }

        if (isset($_GET['filter'])) {
            //Filter
            $args = array(
                'tbl' => 'tbl_movies',
                'tbl2' => 'tbl_genre',
                'tbl3' => 'tbl_mov_genre',
                'col' => 'movies_id',
                'col2' => 'genre_id',
                'col3' => 'genre_name',
                'filter' => $_GET['filter'],
            );
            
            $results = getMoviesByFilter($tbl, $tbl2, $tbl3, $col, $col2, $col3, $filter);

            echo json_encode($results);

        } else {

            $results = getAll($tbl);

            echo json_encode($results);
           
        }
    
?>



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dashboard</title>
</head>
<body>
    <h2>Welcome! <?php echo $_SESSION['uname'];?></h2>
    
    <a href="admin_createuser.php">Create User</a>
    <a href="admin_edituser.php">Edit User</a>
    <a href="admin_deleteuser.php">Delete User</a>
    <a href="admin_logout.php">Sign Out</a>
</body>
</html>