<?php

namespace AppBundle\Controller;
 
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\View\View;


class ProductController extends FOSRestController
{
    /**
     * @Rest\Post("/product/")
     */
   public function getProducts(Request $request)
    {
    //Get params from request object
   $categoryType = $request->get('categoryType');
   $additionalType = $request->get('additionalType');
   $limit = $request->get('limit');
   $pagenum = $request->get('pagenum');
  
  //get data from url
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, 'http://pf.tradetracker.net/?aid=1&type=json&encoding=utf-8&fid=251713&categoryType='.$categoryType.'&additionalType='.$additionalType.'&limit='.$limit.'');
  curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json')); // Assuming you're requesting JSON
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  $jsonresponse = curl_exec($ch);
 
  //decode string to json object
  $decoded= json_decode($jsonresponse);
  $products=  $decoded->products;

  //filter json list with required data fields
  foreach($products as $p) $newarr[] = array('ID' => $p->ID, 'name' => $p->name,'description' => $p->description,'categories' => $p->categories,'price' => $p->price,'URL'=> $p->URL,'images'=>$p->images);
  $finalJSON = json_encode($newarr);

  //convert back
  $response = new Response(json_encode($newarr));
  $response->headers->set('Content-Type', 'application/json');

   return $response;
    }
    
}