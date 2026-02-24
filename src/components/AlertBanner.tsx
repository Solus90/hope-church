import type { SanityAlertBanner } from "@/sanity/types";

interface Props {
  banner: SanityAlertBanner | null;
}

export default function AlertBanner({ banner }: Props) {
  if (!banner?.enabled || !banner.message) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed top-0 left-0 right-0 z-[60] bg-red-600 text-white"
      style={{ height: "44px" }}
    >
      <div className="container-hope h-full flex items-center justify-center gap-2 text-sm font-sans font-semibold">
        <span aria-hidden="true">⚠️</span>
        <span>{banner.message}</span>
        {banner.linkText && banner.linkUrl && (
          <a
            href={banner.linkUrl}
            className="underline underline-offset-2 hover:no-underline ml-2 shrink-0"
          >
            {banner.linkText}
          </a>
        )}
      </div>
    </div>
  );
}
