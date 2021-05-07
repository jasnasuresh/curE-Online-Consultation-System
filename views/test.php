
<?php
  
$user = 'root';
$password = ''; 
  
$database = 'software'; 
  


$servername='localhost';
$mysqli = new mysqli($servername, $user, 
                $password, $database);
  
if ($mysqli->connect_error) {
    die('Connect Error (' . 
    $mysqli->connect_errno . ') '. 
    $mysqli->connect_error);
}
  

$sql = "SELECT * FROM doctor ORDER BY age DESC ";
$result = $mysqli->query($sql);
$mysqli->close(); 
?>

<!DOCTYPE html>
<html lang="en">
  
<head>
    <meta charset="UTF-8">
    <title>doctor Details</title>



    <style>
        table {
            margin: 0 auto;
            font-size: large;
            border: 1px solid black;
        }
  
        h1 {
            text-align: center;
            color: #006600;
            font-size: xx-large;
            font-family: 'Gill Sans', 'Gill Sans MT', 
            ' Calibri', 'Trebuchet MS', 'sans-serif';
        }
  
        td {
            background-color: #E4F5D4;
            border: 1px solid black;
        }
  
        th,
        td {
            font-weight: bold;
            border: 1px solid black;
            padding: 10px;
            text-align: center;
        }
  
        td {
            font-weight: lighter;
        }
    </style>
</head>
  
<body>
    <section>
        <h1>doctor details</h1>
       
        <table>
            <tr>
                <th>id</th>
                <th>firstname</th>
                <th>age</th>
                <th>email</th>
            
                <th>location</th>
            </tr>
         
            <?php   
                while($rows=$result->fetch_assoc())
                {
             ?>
            <tr>
            
                <td><?php echo $rows['ID'];?></td>
                <td><?php echo $rows['firstname'];?></td>
                <td><?php echo $rows['age'];?></td>
                <td><?php echo $rows['email'];?></td>
               
                <td><?php echo $rows['city'];?></td>
            </tr>
            <?php
                }
             ?>
        </table>
    </section>
</body>
  
</html>