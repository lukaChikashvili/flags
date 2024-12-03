uniform vec3 uGlowColorStart;  // Start color of the gradient
uniform vec3 uGlowColorEnd;    // End color of the gradient
uniform float uTime;           // Optional: Use time for animated effects

void main() {
    // Create a linear gradient effect based on the vertical position (y coordinate)
    float gradientFactor = (gl_FragCoord.y / 500.0);  // Change 500.0 based on your geometry size

    // Blend the start and end colors based on the gradientFactor
    vec3 gradientColor = mix(uGlowColorStart, uGlowColorEnd, gradientFactor);

    // Add time-based effect (for pulsating glow)
    float pulsation = sin(uTime * 2.0) * 0.5 + 0.5;  // Pulsating factor (range: 0-1)
    gradientColor *= pulsation;

    gl_FragColor = vec4(gradientColor, 1.0);
}
