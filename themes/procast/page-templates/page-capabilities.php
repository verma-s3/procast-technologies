<?php
  global $post;
/*
  Template Name: Capabilities
*/
/**
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package procast
 */

/****************************************************
 * STORE ALL LOGIC IN CONTEXT AND OUTPUT TO VIEW
 ***************************************************/
$context = Timber::context();
$context['field'] = Timber::get_post();

$templates = array( 'page-capabilities.twig' );
Timber::render( $templates, $context );



