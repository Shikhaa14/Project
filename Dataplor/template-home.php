<?php

/**
* Layout of York Hero Banner.
**/

// Create id attribute allowing for custom "anchor" value.
$id = 'iframe_' . $block['id'];
if( !empty($block['anchor']) ) {
  $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = '';
if( !empty($block['className']) ) {
  $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
  $className .= ' align' . $block['align'];
}

$cta_h2_text = get_field('cta_h2_text');
$hero_title = get_field('hero_title');
$hero_content = get_field('hero_content');
$cta_image = get_field('cta_image');
$bg_color = get_field('bg_color');
$cta_form = get_field('cta_form');

?>

<!-- CTA section starts -->
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> cta <?php if(!empty($cta_form)){echo 'subscribe-box';}?>" style="background-color: <?php echo $bg_color;?>;">
  <div class="container">
    <div class="row">
      <?php if(!empty($cta_h2_text)):?>
      <div class="col-lg-6 section-header">
        <h2 class="text-white wow fadeInUp"><?php echo $cta_h2_text;?></h2>
      </div>
      <?php endif;?>
      <?php if( have_rows('cta_buttons') ):?>
      <div class="col-lg-6 d-flex justify-content-end gap-4">
        <?php while( have_rows('cta_buttons') ) : the_row();
            $button = get_sub_field('button');
            $button_primary_layout = get_sub_field('button_primary_layout');

            if($button_primary_layout == 'yellow'){
              $class = 'btn_primary';
            }else{
              $class = 'btn_secondary';
            }
            ?>
            <?php if(!empty($button)):?>
            <a href="<?php echo $button['url'];?>" class="<?php echo $class;?> wow fadeInUp delay1">
              <span><?php echo $button['title'];?></span>
            </a>
            <?php endif;?>
        <?php endwhile;?>
      </div>
      <?php endif;?>
      <?php if(!empty($cta_form)):?>
      <div class="col-lg-6 d-flex justify-content-end gap-4">
        <?php echo do_shortcode( get_field('cta_form') );?>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>


      </div>
      <?php endif;?>
    </div>
  </div>
  <?php if(!empty($cta_image)):?>
  <img src="<?php echo $cta_image['url']; ?>" class="cta-bg" alt="<?php echo $cta_image['alt']; ?>" />
  <?php endif;?>
 
  <div class="modal fade cta-form" id="cta-form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h3>Talk to an Expert / Get in Touch</h3>
          <div class="cta-form-box">
            <!-- form will goes here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- CTA section end -->