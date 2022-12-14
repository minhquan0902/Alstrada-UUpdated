jQuery(function ($) {
  $.supersized({
    // Functionality
    slideshow: 1, // Slideshow on/off
    autoplay: 1, // Slideshow starts playing automatically
    start_slide: 1, // Start slide (0 is random)
    stop_loop: 0, // Pauses slideshow on last slide
    random: 0, // Randomize slide order (Ignores start slide)
    slide_interval: 12000, // Length between transitions
    transition: 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
    transition_speed: 1000, // Speed of transition
    new_window: 1, // Image links open in new window/tab
    pause_hover: 0, // Pause slideshow on hover
    keyboard_nav: 1, // Keyboard navigation on/off
    performance: 1, // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
    image_protect: 1, // Disables image dragging and right click with Javascript

    // Size & Position
    min_width: 0, // Min width allowed (in pixels)
    min_height: 0, // Min height allowed (in pixels)
    vertical_center: 1, // Vertically center background
    horizontal_center: 1, // Horizontally center background
    fit_always: 0, // Image will never exceed browser width or height (Ignores min. dimensions)
    fit_portrait: 1, // Portrait images will not exceed browser height
    fit_landscape: 0, // Landscape images will not exceed browser width

    // Components
    slide_links: "blank", // Individual links for each slide (Options: false, 'num', 'name', 'blank')
    thumb_links: 0, // Individual thumb links for each slide
    thumbnail_navigation: 0, // Thumbnail navigation
    slides: [
      // Slideshow Images
      {
        image: "./images/slider/Slider1Alstrada.jpg",
        title:
          'A NEW DAWN OF DATA <div class="slidedescription"><p>Alstrada is the data monetization company</p> <br/> <ol><li>1. We shorten the time line to create value from data</li> <li>2. Our priority is your smooth monetization journey</li> <li>3. We turn data chaos and lack of data knowledge into right action</li></ol></div>',
        thumb: "",
        url: "http://themes.tvda.eu/",
      },
      {
        image: "./images/slider/Slider2Alstrada.jpg",
        title:
          'VISION AND USP <div class="slidedescription"><p>We join the power of data in</p> <br/> <ol><li>1. Our cutting-edge next generation data solutions</li> <li>2. Our exceptional Global Data Thought Leaders and award-winning Chief Data Officers</li> <li>3. Our data first approach to data resulting in high data usability and value</li></ol></div>',
        thumb: "",
        url: "http://themes.tvda.eu/",
      },
      {
        image: "./images/slider/Slider3Alstrada.jpg",
        title:
          'PROFESSIONAL DATA TEAM <div class="slidedescription"><ol><li>- Globally Recognized Data Thought Leaders incl. the father of data monetization</li> <li>- Globally Award Winning Chief Data Officers</li> <li>- Pioneering Knowledge Engineers/Data Scientists</li> </ol></div>',
        thumb: "",
        url: "http://themes.tvda.eu/",
      },
      {
        image: "./images/slider/Slider4Alstrada.jpg",
        title:
          'DATA MONETIZATION WITHIN YOUR REACH <div class="slidedescription">join us and get ahead of the game. Achieve customer engagement your competitors will envy</div>',
        thumb: "",
        url: "http://themes.tvda.eu/",
      },
    ],

    // Theme Options
    progress_bar: 0, // Timer for each slide
    mouse_scrub: 0,
  });
});
