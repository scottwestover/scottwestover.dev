precision mediump float;

/*
  No-Clip / Backrooms Glitch Shader
  --------------------------------
  uProgress: 0.0 → 1.0 → 0.0 (transition control)
*/

uniform sampler2D uMainSampler;
uniform vec2 uResolution;
uniform float uTime;
uniform float uProgress;

varying vec2 outTexCoord;

/* ------------------------------------------------ */
/* Utility noise                                    */
/* ------------------------------------------------ */

float rand(vec2 co) {
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

/* ------------------------------------------------ */
/* Horizontal signal distortion (VHS tearing)       */
/* ------------------------------------------------ */

vec2 applySignalWarp(vec2 uv) {
  float strength = uProgress * uProgress;

  float scan = sin(uv.y * 120.0 + uTime * 20.0);
  float noise = rand(vec2(uv.y, uTime));

  // If you want more violent tearing, change 0.025 to bigger value like 0.04
  float offset = scan * noise * 0.04 * strength;
  uv.x += offset;

  return uv;
}

/* ------------------------------------------------ */
/* Block corruption (digital squares)               */
/* ------------------------------------------------ */

vec2 applyBlockCorruption(vec2 uv) {
  float strength = smoothstep(0.15, 0.7, uProgress);

  // Grid size controls block scale
  // If you want bigger, chunkier corruption, make gridSize smaller
  vec2 gridSize = vec2(90.0);
  vec2 gridUV = floor(uv * gridSize) / gridSize;

  float r = rand(gridUV + floor(uTime * 10.0));

  if (r < strength * 0.45) {
    float offset = (r - 0.2) * 0.06 * strength;
    uv.x += offset;
  }

  return uv;
}

/* ------------------------------------------------ */
/* RGB split (chromatic aberration)                 */
/* ------------------------------------------------ */

vec4 applyRGBSplit(vec2 uv) {
  // If you want stronger RGB separation, change 0.012 to something bigger like 0.02
  float amount = 0.02 * uProgress;

  vec2 offset = vec2(amount, 0.0);

  float r = texture2D(uMainSampler, uv + offset).r;
  float g = texture2D(uMainSampler, uv).g;
  float b = texture2D(uMainSampler, uv - offset).b;

  return vec4(r, g, b, 1.0);
}

/* ------------------------------------------------ */
/* Main                                             */
/* ------------------------------------------------ */

void main() {
  vec2 uv = outTexCoord;

  // Step 1: horizontal tearing
  uv = applySignalWarp(uv);

  // Step 2: block displacement
  uv = applyBlockCorruption(uv);

  // Step 3: RGB split
  vec4 color = applyRGBSplit(uv);

  /* ---------------------------------------------- */
  /* Glitch color flashes (pink/yellow/cyan blocks) */
  /* ---------------------------------------------- */

  float glitchChance = smoothstep(0.4, 0.9, uProgress);
  vec2 glitchGrid = floor(uv * 140.0);
  float glitchNoise = rand(glitchGrid + uTime);

  if (glitchNoise < glitchChance * 0.12) {
    vec3 glitchColor;

    if (glitchNoise < 0.04) {
      glitchColor = vec3(1.0, 0.2, 0.6); // pink
    } else if (glitchNoise < 0.08) {
      glitchColor = vec3(1.0, 0.9, 0.2); // yellow
    } else {
      glitchColor = vec3(0.2, 0.9, 1.0); // cyan
    }

    color.rgb = mix(color.rgb, glitchColor, 0.85);
  }

  gl_FragColor = color;
}
