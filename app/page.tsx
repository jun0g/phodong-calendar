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
    return <div className="p-6">에러 발생: {error.message}</div>;
  }

  // 연도별 그룹화
  const groupedByYear = data?.reduce<Record<number, Photo[]>>((acc, photo) => {
    if (!acc[photo.year]) acc[photo.year] = [];
    acc[photo.year].push(photo);
    return acc;
  }, {}) || {};

  return (
    <div className="min-h-screen bg-white px-0 text-zinc-900">
      <div className="space-y-12">
        {Object.entries(groupedByYear).map(([year, photos]) => (
          <section key={year}>
            <h2 className="mb-6 text-lg font-medium text-zinc-800">{year}</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((photo) => (
                <div key={photo.id} className="">
                  <div className="overflow-hidden rounded-md bg-white">
                    <img
                      src={photo.image_url}
                      alt={photo.title}
                      className="h-56 w-full object-cover"
                    />
                  </div>

                  <div className="mt-3 text-sm text-zinc-800">
                    <div className="font-medium">{photo.year}년 {photo.month}월</div>
                    <div className="text-xs">{photo.photographer}</div>
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