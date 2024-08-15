const fragmentShader = `
uniform float u_intensity;
uniform float u_time;
uniform vec3 u_color; // User-provided color
uniform float u_opacity; // User-provided opacity

varying vec2 vUv;
varying float vDisplacement;

void main() {
    // Compute distortion factor based on displacement and intensity
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    
    // Ensure distort is in the range [0.0, 1.0] for darkening
    float darkenAmount = clamp(distort, 0.0, 0.35);
    
    // Base color from user-provided color
    vec3 baseColor = u_color;
    
    // Darken the base color based on the distortion
    vec3 color = baseColor * (1.0 - darkenAmount);

    gl_FragColor = vec4(color, u_opacity);
}
`;

export default fragmentShader;
