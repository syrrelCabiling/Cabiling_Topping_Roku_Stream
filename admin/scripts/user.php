<?php 
function createUser($fname, $username, $password, $email){
    $pdo = Database::getInstance()->getConnection();
    
    //TODO: finish the below so that it can run a SQL query
    // to create a new user with provided data
    $create_user_query = 'INSERT INTO tbl_user(user_fname, user_name, user_pass, user_email, user_ip)';
    $create_user_query .= ' VALUES(:fname, :username, :password, :email, "no" )';

    $create_user_set = $pdo->prepare($create_user_query);
    $create_user_result = $create_user_set->execute(
        array(
            ':fname'=>$fname,
            ':username'=>$username,
            ':password'=>$password,
            ':email'=>$email,
        )
    );
    //TODO: redirect to index.php if creat user successfully
    // otherwise, return a error message
    if($create_user_result){
        redirect_to('index.php');
    }else{
        return 'The user did not go through';
    }
}

function getSingleUser($id){
    $pdo = Database::getInstance()->getConnection();
    //TODO: execute the proper SQL query to fetch the user data whose user_id = $id
    $get_user_query = 'SELECT * FROM tbl_user WHERE user_id = :id';
    $get_user_set = $pdo->prepare($get_user_query);
    $get_user_result = $get_user_set->execute(
        array(
            ':id'=>$id
        )
    );

    //TODO: if the execution is successful, return the user data
    // Otherwise, return an error message
    if($get_user_result){
        return $get_user_set;
    }else{
        return 'There was a problem accessing the user';
    }
}

function getAllUsers(){
    $pdo = Database::getInstance()->getConnection();

    $get_user_query = 'SELECT * FROM tbl_user';
    $get_user_set = $pdo->prepare($get_user_query);
    $get_user_result = $get_user_set->execute();

    $users = array();

    if ($get_user_result) {
        while($user = $get_user_set->fetch(PDO::FETCH_ASSOC)) {
            // parse all the users' info like we did for a single and pass them 
            // into the users array

            $currentuser = array();

            $currentuser['id'] = $user['user_id'];
            $currentuser['uname'] = $user['user_name'];
            $currentuser['fname'] = $user['user_fname'];
            $currentuser['admin'] = $user['user_admin'];
            $currentuser['avatar'] = $user['user_avatar'];
            $currentuser['permission'] = $user['user_permissions'];

            $users[] = $currentuser;
        }

        return json_encode($users);
    } else {
        return 'There was a problem getting the users';
    }
}

function getUser($conn) {
    // validate that the post method is working from our JS file

    $username = $_POST["user_name"];
    //echo $username;

    $getUser = 'SELECT * FROM tbl_user where uname="'.$username.'"';
    $runQuery = $conn->query($getUser);

    $result = array();

    while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
        // push each row of data into our array to make it easy to iterate over
        $result[] = $row;
    }

    return $result;
}