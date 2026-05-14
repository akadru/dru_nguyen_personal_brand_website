import SocialIcons from "./SocialIcons";

export default function TopBar() {
  return (
    <div
      className="hidden border-b md:block"
      style={{ background: "var(--brand-jungle)", borderColor: "rgba(176,190,197,0.15)" }}
    >
      <div className="mx-auto flex h-10 max-w-[1300px] items-center justify-between px-5 md:px-10">
        <SocialIcons variant="topbar" />
        <div
          className="flex items-center gap-4 text-[10px] font-bold uppercase"
          style={{ color: "var(--brand-pastel)", letterSpacing: "0.18em" }}
        >
          <span>Asia/Ho_Chi_Minh</span>
        </div>
      </div>
    </div>
  );
}
