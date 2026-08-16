import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      // Hash'li static asset'ler: 1 yil immutable (dosya adi degistigi icin guvenli)
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      // HTML + gorseller + her sey: en fazla 5 dakika cache (degisiklikler hizla yayilir)
      {
        source: "/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=300, stale-while-revalidate=300" }],
      },
    ];
  },
};

export default nextConfig;
