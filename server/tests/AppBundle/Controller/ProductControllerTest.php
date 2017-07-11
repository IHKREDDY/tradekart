<?php

namespace Tests\AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;


class ProductControllerTest extends WebTestCase
{
    public function testProducts()
    {
        $client = static::createClient();

        $crawler = $client->request('POST', '/product/');

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
      
      // Assert that the "Content-Type" header is "application/json"
$this->assertTrue(
    $client->getResponse()->headers->contains(
        'Content-Type',
        'application/json'
    ),
    'the "Content-Type" header is "application/json"' // optional message shown on failure
);
    }
}
