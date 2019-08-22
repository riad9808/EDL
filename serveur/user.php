<?php
/**
 * Created by PhpStorm.
 * User: RIAD
 * Date: 09/08/2019
 * Time: 15:27
 */

class user
{
  private $name ;
  private $telephone;
  private $password;
  private $type;

  /**
   * user constructor.
   * @param $name
   * @param $telephone
   * @param $password
   * @param $type
   */
  public function __construct($name, $telephone, $password, $type)
  {
    $this->name = $name;
    $this->telephone = $telephone;
    $this->password = $password;
    $this->type = $type;
  }

  /**
   * @return mixed
   */
  public function getName()
  {
    return $this->name;
  }

  /**
   * @param mixed $name
   */
  public function setName($name)
  {
    $this->name = $name;
  }

  /**
   * @return mixed
   */
  public function getTelephone()
  {
    return $this->telephone;
  }

  /**
   * @param mixed $telephone
   */
  public function setTelephone($telephone)
  {
    $this->telephone = $telephone;
  }

  /**
   * @return mixed
   */
  public function getPassword()
  {
    return $this->password;
  }

  /**
   * @param mixed $password
   */
  public function setPassword($password)
  {
    $this->password = $password;
  }

  /**
   * @return mixed
   */
  public function getType()
  {
    return $this->type;
  }

  /**
   * @param mixed $type
   */
  public function setType($type)
  {
    $this->type = $type;
  }



}
