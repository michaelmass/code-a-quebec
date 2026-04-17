'use client'

import { Shader, SolidColor, Aurora, FlowingGradient, LensFlare, FloatingParticles, CursorTrail } from 'shaders/react'

export function HeroShader() {
  return (
    <Shader
      className="!absolute inset-0"
      style={{ width: '100%', height: '100%', position: 'absolute' }}
    >
      <SolidColor color="#0f2460" />
      <FlowingGradient
        colorA="#0c1d50"
        colorB="#2563eb"
        colorC="#3b82f6"
        colorD="#60a5fa"
        speed={1}
        distortion={0.6}
        blendMode="screen"
      />
      <Aurora
        colorA="#1d4ed8"
        colorB="#3b82f6"
        colorC="#60a5fa"
        intensity={90}
        speed={2}
        waviness={55}
        rayDensity={20}
        height={150}
        curtainCount={4}
        center={{ type: 'mouse-position', smoothing: 0.85, reach: 0.4, originX: 0.5, originY: 0.4 }}
        seed={7}
        blendMode="linearDodge"
        opacity={0.8}
      />
      <LensFlare
        lightPosition={{ type: 'mouse-position', smoothing: 0.6, reach: 0.9 }}
        intensity={0.25}
        ghostIntensity={0.1}
        ghostSpread={0.5}
        ghostChroma={0.05}
        haloIntensity={0.15}
        haloRadius={0.5}
        haloChroma={0.15}
        haloSoftness={0.9}
        starburstIntensity={0.15}
        starburstPoints={6}
        streakIntensity={0.08}
        streakLength={0.3}
        glareIntensity={0.12}
        glareSize={0.35}
        edgeFade={0.3}
        speed={0.3}
        blendMode="linearDodge"
        opacity={0.5}
      />
      <FloatingParticles
        speed={0.1}
        particleSize={0.5}
        particleSoftness={1}
        twinkle={0.9}
        count={3}
        particleColor="#60a5fa"
        particleDensity={1}
        randomness={0.3}
        angle={270}
        blendMode="screen"
        opacity={0.25}
      />
      <CursorTrail
        colorA="#60a5fa"
        colorB="#2563eb"
        radius={0.6}
        length={0.4}
        shrink={0.8}
        blendMode="screen"
        opacity={0.5}
      />
    </Shader>
  )
}
