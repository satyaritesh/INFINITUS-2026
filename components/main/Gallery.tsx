import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  return (
    <section className="section relative gallery" id='gallery'>
      <div className="container z-[25]">
        <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text text-transparent font-red-rose m-10'>Past Performers</h1>
        <ul className="gallery-list">
          <li className="gallery-item float" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '100%' }}
              >
                <Image
                  src="/past-perform/akram-poster.jpeg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="Dj Akram"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="https://www.instagram.com/dj_akram_12?igsh=MWU5cjBuaGduM3g5eQ==" className="card-title font-space font-semibold text-purple-200">
                    Dj Akram
                  </Link>
                </h3>

                <span className="card-tag italic">POP STAR</span>
              </div>
              <Link href="https://www.instagram.com/dj_akram_12?igsh=MWU5cjBuaGduM3g5eQ==" className="btn-icon">
                <Image src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
            </div>

            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '100%' }}
              >
                <Image
                  src="/past-perform/akram.jpeg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt=""
                  className="img-cover items-center"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="https://www.instagram.com/dj_akram_12?igsh=MWU5cjBuaGduM3g5eQ==" className="card-title font-space font-semibold text-purple-200">
                    Dj Akram
                  </Link>
                </h3>
                <span className="card-tag italic">POP STAR</span>
              </div>
              <Link href="https://www.instagram.com/dj_akram_12?igsh=MWU5cjBuaGduM3g5eQ==" className="btn-icon">
                <Image src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
            </div>
          </li>

          <li className="gallery-item float-rev" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '100%' }}
              >
                <Image
                  src="/past-perform/hoody-poster.jpeg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="hoody"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="https://www.instagram.com/hoody.hyd?igsh=aDAzdTY5c3lmZjlk" className="card-title font-space font-semibold text-purple-200">
                    Hoody
                  </Link>
                </h3>
                <span className="card-tag italic">Stand Up Comedian</span>
              </div>
              <Link href="https://www.instagram.com/hoody.hyd?igsh=aDAzdTY5c3lmZjlk" className="btn-icon">
                <Image src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
            </div>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '100%' }}
              >
                <Image
                  src="/past-perform/hoody.jpeg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="hoody"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="https://www.instagram.com/hoody.hyd?igsh=aDAzdTY5c3lmZjlk" className="card-title font-space font-semibold text-purple-200">
                    Hoody
                  </Link>
                </h3>
                <span className="card-tag italic">Stand Up Comedian</span>
              </div>

              <Link href="https://www.instagram.com/hoody.hyd?igsh=aDAzdTY5c3lmZjlk" className="btn-icon top-28">
                <Image src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
            </div>
          </li>

          <li className="gallery-item float" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '100%' }}
              >
                <Image
                  src="/past-perform/nandzy-poster.jpeg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="Nandzy"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="https://www.instagram.com/djnandzy?igsh=MWxpbW15N3ExY3Rodg==" className="card-title font-space font-semibold text-purple-200">
                    Nandzy
                  </Link>
                </h3>
                <span className="card-tag italic">Music Producers & DJ</span>
              </div>
              <Link href="https://www.instagram.com/djnandzy?igsh=MWxpbW15N3ExY3Rodg==" className="btn-icon">
                <Image src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
            </div>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '100%' }}
              >
                <Image
                  src="/past-perform/nandzy.jpeg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="Nandzy"
                  className="img-cover items-center"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="https://www.instagram.com/djnandzy?igsh=MWxpbW15N3ExY3Rodg==" className="card-title font-space font-semibold text-purple-200">
                    Nandzy
                  </Link>
                </h3>
                <span className="card-tag italic">Music Producers & DJ</span>
              </div>

              <Link href="https://www.instagram.com/djnandzy?igsh=MWxpbW15N3ExY3Rodg==" className="btn-icon top-28">
                <Image src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
            </div>
          </li>

          <li className="gallery-item float-rev" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '100%' }}
              >
                <Image
                  src="/past-perform/ram-poster.jpeg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="Ram Miryala"
                  className="img-cover items-center"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="https://www.instagram.com/miriyala_ram?igsh=YnExZ3FsOXl5OGNv" className="card-title font-space font-semibold text-purple-200">
                    Ram Miryala
                  </Link>
                </h3>
                <span className="card-tag">Singer</span>
              </div>
              <Link href="https://www.instagram.com/miriyala_ram?igsh=YnExZ3FsOXl5OGNv" className="btn-icon">
                <Image src="/images/arrow-forward.svg" width={43} height={20} loading="lazy" alt="arrow-forward icon" />
              </Link>
            </div>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '100%' }}
              >
                <Image
                  src="/past-perform/ram.jpeg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="Ram Miryala"
                  className="img-cover items-center"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="https://www.instagram.com/miriyala_ram?igsh=YnExZ3FsOXl5OGNv" className="card-title font-space font-semibold text-purple-200">
                    Ram Miryala
                  </Link>
                </h3>
                <span className="card-tag italic">Singer</span>
              </div>

              <Link href="https://www.instagram.com/miriyala_ram?igsh=YnExZ3FsOXl5OGNv" className="btn-icon top-28">
                <Image src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
            </div>
          </li>

          <li className="gallery-item float" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '100%' }}
              >
                <Image
                  src="/past-perform/salim-poster.jpeg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="Salim Sulaiman"
                  className="img-cover items-center"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="https://www.instagram.com/salimsulaimanmusic?igsh=bXF0NW1hNTU2Zzlz" className="card-title font-space font-semibold text-purple-200">
                    Salim Sulaiman
                  </Link>
                </h3>
                <span className="card-tag">Music Directors</span>
              </div>
              <Link href="https://www.instagram.com/salimsulaimanmusic?igsh=bXF0NW1hNTU2Zzlz" className="btn-icon">
                <Image src="/images/arrow-forward.svg" width={43} height={20} loading="lazy" alt="arrow-forward icon" />
              </Link>
            </div>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '100%' }}
              >
                <Image
                  src="/past-perform/salim.jpeg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="Salim Sulaiman"
                  className="img-cover items-center"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="https://www.instagram.com/salimsulaimanmusic?igsh=bXF0NW1hNTU2Zzlz" className="card-title font-space font-semibold text-purple-200">
                    Salim Sulaiman
                  </Link>
                </h3>
                <span className="card-tag italic">Music Directors</span>
              </div>

              <Link href="https://www.instagram.com/salimsulaimanmusic?igsh=bXF0NW1hNTU2Zzlz" className="btn-icon top-28">
                <Image src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
            </div>
          </li>
        </ul>
      </div>

    </section>
  );
};

export default Gallery;
