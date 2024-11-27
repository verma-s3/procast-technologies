<?php
  global $post;
/*
  Template Name: Services
*/
/**
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package procast
 */
/****************************

 * QUERY FEATURED RECIPES

 ***************************/

$serviceArgs = [
  'post_type' => 'our-services',
  'post_status' => 'publish',
  'posts_per_page' => -1,
  'order' => 'ASC',
];
/****************************************************
 * STORE ALL LOGIC IN CONTEXT AND OUTPUT TO VIEW
 ***************************************************/
$context = Timber::context();
$context['field'] = Timber::get_post();
$context['services'] = Timber::get_posts($serviceArgs);
$templates = array( 'page-services.twig' );
Timber::render( $templates, $context );



