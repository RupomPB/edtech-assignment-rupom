import Banner from "@/components/home/Banner";
import Courses from "@/components/home/Courses";


export default async function Home() {
  return (
    <div className="space-y-10">
      
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Courses></Courses>
      </section>
    </div>
  );
}
