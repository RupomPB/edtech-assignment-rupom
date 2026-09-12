import Banner from "@/components/home/Banner";
import Courses from "@/components/home/Courses";
import Text from "@/components/Text";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="space-y-10">
      <Text></Text>
      <p>{JSON.stringify(session)}</p>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Courses></Courses>
      </section>
    </div>
  );
}
