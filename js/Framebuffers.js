function createFramebuffers() {
    var ext = gl.getExtension('OES_texture_float');
    var ext2 = gl.getExtension('OES_texture_float_linear');

    createBackBuffer();
}

function createBackBuffer() {
    backBuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, backBuffer);

    var texture = createAndSetupTexture();
    textureBackBuffer = texture;

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.viewportWidth, gl.viewportHeight, 0, gl.RGBA, gl.FLOAT, null);

    var renderbuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, gl.viewportWidth, gl.viewportHeight);

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);
}