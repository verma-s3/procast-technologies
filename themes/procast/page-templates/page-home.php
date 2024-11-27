<?php
  global $post;
/*
  Template Name: Home
*/
/**
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package procast
 */
$serviceArgs = [
  'post_type' => 'our-services',
  'post_status' => 'publish',
  'posts_per_page' => -1,
  'orderby' => 'rand',
];
/****************************************************
 * STORE ALL LOGIC IN CONTEXT AND OUTPUT TO VIEW
 ***************************************************/
$context = Timber::context();
$context['field'] = Timber::get_post();
$context['services'] = Timber::get_posts($serviceArgs);
$templates = array( 'page-home.twig' );
Timber::render( $templates, $context );



