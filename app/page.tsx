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
    <div className="bg-white px-0 text-zinc-900">
      <div className="space-y-12">
        {Object.entries(groupedByYear).map(([year, photos]) => (
          <section key={year}>
            <h2 className="mb-6 text-lg font-medium text-zinc-800">{year}</h2>

            <div className="flex gap-10 overflow-x-auto whitespace-nowrap pb-4">
              {photos.map((photo) => (
                <div key={photo.id} className="relative flex flex-col shrink-0">
                  <div className="flex justify-center overflow-hidden rounded-md bg-white">
                    <img
                      src={photo.image_url}
                      alt={photo.title}
                      className="h-64 w-auto object-contain"
                    />
                  </div>

                  <div className="mt-2 flex justify-end text-xs font-medium text-black">
                    {photo.photographer}
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