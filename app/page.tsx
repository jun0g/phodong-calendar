import { supabase } from "@/lib/supabase";

type Photo = {
  id: string;
  title: string;
  image_url: string;
  year: number;
  month: number;
  photographer: string;
};

export default async function Home() {
  const { data, error } = await supabase
    .from("photos")
    .select("*")
    .order("year", { ascending: false })
    .order("month", { ascending: true });

  if (error) {
    return <div className="p-10">에러 발생: {error.message}</div>;
  }

  // 연도별 그룹화
  const groupedByYear = data?.reduce<Record<number, Photo[]>>((acc, photo) => {
    if (!acc[photo.year]) {
      acc[photo.year] = [];
    }
    acc[photo.year].push(photo);
    return acc;
  }, {}) || {};

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-16 md:px-20">
      <h1 className="mb-16 text-3xl font-semibold tracking-tight text-zinc-900">
        phodong_calendar
      </h1>

      <div className="space-y-24">
        {Object.entries(groupedByYear).map(([year, photos]) => (
          <section key={year}>
            {/* 연도 타이틀 */}
            <h2 className="mb-10 text-2xl font-medium text-zinc-800">
              {year}
            </h2>

            {/* 월 그리드 */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="group transition-all duration-300"
                >
                  <div className="overflow-hidden rounded-lg bg-white">
                    <img
                      src={photo.image_url}
                      alt={photo.title}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 space-y-1">
                    <div className="text-sm font-medium text-zinc-900">
                      {photo.year}년 {photo.month}월
                    </div>
                    <div className="text-xs text-zinc-500">
                      {photo.photographer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}