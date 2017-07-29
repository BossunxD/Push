<?php
   header('Access-Control-Allow-Origin: *');

   // Define database connection parameters
   $hn      = 'localhost';
   $un      = 'root';
   $pwd     = '';
   $db      = 'push';
   $cs      = 'utf8';

   // Set up the PDO parameters
   $dsn  = "mysql:host=" . $hn . ";port=3306;dbname=" . $db . ";charset=" . $cs;
   $opt  = array(
                        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
                        PDO::ATTR_EMULATE_PREPARES   => false,
                       );
   // Create a PDO instance (connect to the database)
   $pdo  = new PDO($dsn, $un, $pwd, $opt);

   // Retrieve specific parameter from supplied URL
   $key  = strip_tags($_REQUEST['key']);
   $data    = array();


   // Determine which mode is being requested
   switch($key)
   {

      // Add a new record to the technologies table
      case "create":

         // Sanitise URL supplied values
         $activity_name       = filter_var($_REQUEST['activity_name'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $activity_location   = filter_var($_REQUEST['activity_location'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $activity_date   = filter_var($_REQUEST['activity_date'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);


         // Attempt to run PDO prepared statement
         try {
            $sql  = "INSERT INTO activity (activty_name, activity_location, activity_date) VALUES(:activity_name, :activity_location, :activity_date)";
            $stmt    = $pdo->prepare($sql);
            $stmt->bindParam(':activity_name', $activity_name, PDO::PARAM_STR);
            $stmt->bindParam(':activity_location', $activity_location, PDO::PARAM_STR);
            $stmt->bindParam(':activity_date', $activity_date, PDO::PARAM_STR);
            $stmt->execute();

            echo json_encode(array('message' => 'Congratulations the record ' . $activity_name . ' was added to the database'));
         }
         // Catch any errors in running the prepared statement
         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;



      // Update an existing record in the technologies table
      case "update":

         // Sanitise URL supplied values
         $event_go          = filter_var($_REQUEST['event_go'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

         // Attempt to run PDO prepared statement
         try {
            $sql  = "UPDATE event SET event_go = 'yes'  WHERE event_id = :event_id";
            $stmt =  $pdo->prepare($sql);
            $stmt->bindParam(':event_go', $event_go, PDO::PARAM_STR);
            $stmt->bindParam(':event_id', $evnt_id, PDO::PARAM_INT);
            $stmt->execute();

            echo json_encode('Congratulations the record ' . $name . ' was updated');
         }
         // Catch any errors in running the prepared statement
         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;



      // Remove an existing record in the technologies table
      case "delete":

         // Sanitise supplied record ID for matching to table record
         $activity_id   =  filter_var($_REQUEST['activity_id'], FILTER_SANITIZE_NUMBER_INT);

         // Attempt to run PDO prepared statement
         try {
            $pdo  = new PDO($dsn, $un, $pwd);
            $sql  = "DELETE FROM activty WHERE activity_id = :activity_id";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':activity_id', $activity_id, PDO::PARAM_INT);
            $stmt->execute();

            echo json_encode('Congratulations the record ' . $activity_name . ' was removed');
         }
         // Catch any errors in running the prepared statement
         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;
   }

?>
