import Image from 'next/image';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function Home() {
  const name = 'jaegweon';
  const result = 1 + 2;
  return (
    <main className="bg-yellow-600 text-black">
      <div className="font-mono bg-red-900 text-red-300">
        <Navbar />
      </div>
      <div className="font-mono text-black-300 text-center mt-1 p-4">
        <h1 className="text-3xl font-bold">Main Page</h1>
      </div>
      <div className="font-mono text-black-300 text-center m-4"></div>
      <div className="font-mono bg-white-600 text-black-300 text-center m-4">
        <p className="text-black-600">Bassguitar를 좋아합니다.</p>
        <p className="text-black-600">Web개발, 보안을 공부하고 있어요.</p>
      </div>
      <div className="font-mono bg-white-600 text-blue-300 text-center m-4 flex justify-center">
        <Image src="/img.jpg" alt="guitar.jpg" width="500" height="300"></Image>
      </div>
      <Footer />
    </main>
  );
}
