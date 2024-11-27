<?php
  global $post;
/*
  Template Name: News & Insights
*/
/**
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package procast
 */
/****************************

 * QUERY FEATURED RECIPES

 ***************************/

 $newsArgs = [
  'post_type' => 'news',
  'post_status' => 'publish',
  'posts_per_page' => -1,
  // 'order' => 'ASC',
];
/****************************************************
 * STORE ALL LOGIC IN CONTEXT AND OUTPUT TO VIEW
 ***************************************************/
$context = Timber::context();
$context['field'] = Timber::get_post();
$context['news'] = Timber::get_posts($newsArgs);
$templates = array( 'page-news-insights.twig' );
Timber::render( $templates, $context );



