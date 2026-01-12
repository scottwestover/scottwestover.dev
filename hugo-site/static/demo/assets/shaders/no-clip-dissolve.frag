#define SHADER_NAME GREY_SCALE_POST_TINT

#ifdef GL_ES
precision mediump float;
#endif

// coordinate from the vertex shader
varying vec2 outTexCoord;
// The original texture of the game object.
uniform sampler2D uMainSampler;
// A value from 0.0 to 1.0 to control the dissolve progress.
uniform float uProgress;

// A function to generate a pseudo-random number.
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// testing to make sure shader works
void main2() {
  gl_FragColor = texture2D(uMainSampler, outTexCoord);
  // mix https://thebookofshaders.com/glossary/?search=mix
  gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126 * gl_FragColor.r + 0.7152 * gl_FragColor.g + 0.0722 * gl_FragColor.b), 1.0);
}

void main() {
  // Get the original color of the pixel from the image.
  vec4 originalColor = texture2D(uMainSampler, outTexCoord);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126 * gl_FragColor.r + 0.7152 * gl_FragColor.g + 0.0722 * gl_FragColor.b), 1.0);

  // Generate a random value for this pixel.
  float rand = random(outTexCoord);

  // If the random value is less than the progress, it means this pixel should "dissolve".
  if (rand < uProgress) {
    // Generate another random value to decide if the static is black or white.
    float staticRand = random(outTexCoord + uProgress);
    // Create a grayscale color for the static.
    vec4 staticColor = vec4(vec3(staticRand), 1.0);
    // Set the pixel to the static color.
    gl_FragColor = staticColor;
  } else {
    // Otherwise, keep the original pixel color.
    gl_FragColor = originalColor;
  }
}