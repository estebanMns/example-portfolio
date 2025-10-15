export default function IntroSection({ dict }: { dict: any }) {
    return (
        <p className="p-5 text-2xl text-white col-span-9 rounded-2xl bg-foreground">
          {dict.intro}
        </p>
    );
}