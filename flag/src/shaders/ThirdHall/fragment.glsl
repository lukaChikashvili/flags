 varying vec2 vUv; 
      uniform vec3 color1;
      uniform vec3 color2; 
 


void main() {
     
   

     vec3 gradient = mix(color2, color1, vUv.y );


      gl_FragColor = vec4(gradient, 1.0);
}