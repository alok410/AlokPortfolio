import React, { useEffect } from 'react';

import '../../styles/Hero/Hero.scss';

import Myself from '../../assets/images/myself.png';

const Hero = () => {
  useEffect(() => {
    const alphbets = document.getElementsByClassName('hero__alphabet');
    for (let i = 0; i <= alphbets.length; i++) {
      alphbets[i]?.addEventListener('animationend', function () {
        alphbets[i].classList.remove('alphabet-animated');
      });

      alphbets[i]?.addEventListener('mouseover', function () {
        alphbets[i].classList.add('alphabet-animated');
      });
    }
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__intro-box">
            <p className="hero__intro-title">
              <span className="hero__intro-line" data-aos="fade-down"></span>
              Hello, I  am  Alok  Patel
            </p>
            <p className="hero__animated-alphabet-box">
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                F
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                U
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                L
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                L
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                S
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                T
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                A
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
              C
              </span>
              <span
                className="hero__alphabet hero__alphabet--last"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                K
              </span>
              
              <span
                className="hero__developer-text"
                data-aos="zoom-out-down"
                data-aos-delay="1800"
              >
                <span className="hero__dev-text">Developer</span>
              </span>
            </p>
            <div
              className="hero__description"
              data-aos="fade"
              data-aos-delay="1800"
            >
              <p>
                I'm a passionate and responsible{' '}
                <span>fullstack developer</span>, with more than 1.5 years of
                experience. Skilled in developing highly responsive websites and
                mobile apps with elegant and efficient code.
              </p>
            </div>

            <div className="hero__buttons">
              <a
                className="hero__know-btn"
                href="#about"
                data-aos="fade-up"
                data-aos-delay="1800"
              >
                Know more
              </a>
              <a
                className="hero__know-btn"
                href="https://doc-0o-a0-prod-01-apps-viewer.googleusercontent.com/viewer2/prod-01/pdf/8jjd6066661gd63s05iom060qti05r2r/0dcc836abudk09ssi95bl8cio87pbq0a/1734279900000/3/109027912428485581902/APznzabd3zr8uNLtTCoAWhdOMKYUiXnn3S1jx2osHgx_vYUk-0105bhch2JsNWcW9u55U_St4X5jV556ScylcgN99f7JzgeXiJVEvSW663FKVgRL-i6nWuVyY12CMxP3HIMvygpn73pT4evIrhMdGO8An4W0MFGntN1IJaQsVFJX3QyCNwIESiiCABGaTuH8DmSThXvEhm0ynGm8QpB2N74EoCK9UVAmOfnqjijU400VEV6h5RGvgGJ05qAMxPT_AWoMnvOvLaSFDkFVmxr9sb4whloBzSUqcGKjbl3ZslQfU26071ldSBcPcaTXvQ1DRMhgSejns2r_9Og8pUxXbHOibfBaAbDba0YXDUVnEy-G0440cwLEiO1hMfVQdKm8bZb0TMd4nWMBPBKK_y78WLi19zpQQufRBUjKaB6STefca4RuT8XpOFOK1u5ZjQJktI76lj4K6miX49De2vSpFCZTeHCGnE3OFp7UygFk6GNn5E25xgGjRjd0jpgsO-iJ46_ET9s-guY3KK-dIWG-RByOv_WxcIVm5sVtVF2OefyXekvoCkPdf-967Q3gANoukd2vUxXQfPN1bL9jxKXJ-Sh-9Y-dqATKkQYbpWX-3SyALjU5ih6T2FT_4Mu8ccKqgKGylVSCs6Ba9PXH_Zb6iRMeOA2CSuJ2OEcAn-S9FqrEKeBWE2sV_q0oCViSxPU_Xcfobhggg_M8hrAm_5DEjFsZ5EznzIp_7kgExs6ZVzxDFqUUSldrDA-PbrwSb-VGFDfOquj8eWMZ_ZDxc12_gVhJGSIlpBJsT-3FvwQ7RZV2FMrNeYJopeGGc0i7Ic3RgdreCM_P1_euHmu7X6EV2_8YG5UPpSRC-gfBQ8PKUEk5hjBMNrGsz-NyjmOPzTWQZJyGgiEIdi6InFFOylkTkc6Rj7AXB40KW-xSkV6CW4EhD9eETvWyC6xtTzwO_anCEYiSa00ipZNrHIiFGSRBGwIJB6qmCR5lLW4rr7M-dG-ocEwPPBJhCOdl96irKc3AUo7krZMpkjs0fpNLnH-_uKSIL9Ytf9kt23ddsyGSq2NVXdChlIVq1_pzjUXt1-XLtYcUrSvSY3eC0kNCbZ5uvMNt94jLcKZj6cnNtyWi9QDl53Ozx-r55xJIc1YsBV7W-iWmrg4O_Ed8HKQG-yrd-HiuoEo1J8w1YFLq2kXEjP19fB_MZQabQjhPRlP1OXkKUhLfRv8Z8ZcgOmpMB9gLXT50YJPXxJmCD2h8jloqeT6zkeKP7F_Oi-znshxCaBVbVJ9qZsZ1wixOndC4jKQQj_76FmFgw442HhSZt5rkkdIZb57w5z3vF95TpOWCQRlXQzpkGYNmK5EvXa5XPUhPF5ZOpnCMoCeqbmi_wJ-OXwVBouYpbig2ykrUXPK40IKTNFij1y8Hwk4w2i8LTzyxdEHhrjyGhwuATTr5wKmscUDfvg7r72pHJQ93f2J2i-N8U1HR9ibUSvo2QhtmXPTB6qtYQynMqvACQjjHLZo6ZXdOJLrGeQZ7MIUVLf6bxjPiczOxzW2MUnWGSiidv2C70mBwSo_FtGsse8iO4Z4FqpLYXrdg4MlTH7UjHeAyXTcae7aXcBNsFh30GFdhMAahxGkt7PaXbyUODkTEUx44EdClqOSpVYxUZrV5hSnsZgG1M1cY6m7s-Y1yHPsGci93tGZT8wLnv19ZrPmuOiVrFl_U3uuQB-JZiKwzgPCS_-WQ3Ugg2O83Seoo9EwmmRfBnRbmrg7PQeM7SF_Z6q-SsYxx1N_xthZPc0i899_YdOwsRSqGxU0jxM-7Xfg79IVlaALhVpHJ9akvIe-gQlLLk7uPAZ8aJTkQcrVI9H9FWFb4cvmSf7DWz6vc8H-Iwek4c0qBdrRdSv-zjSXM3SURnjGHdny7VehbM82-a6G63yTRZhEXV9TRW8Cr2LMo1S88fWolYJI3fN--TNcFIylYenX_qN54OYK5_cU=?authuser=0&nonce=rmagsctdjp3sm&user=109027912428485581902&hash=3jag48tqrbs9hktjs01vlh182ma6gg55"
                data-aos="fade-up"
                data-aos-delay="1800"
              >
                Resume
              </a>
              <a
                className="hero__contact-btn"
                href="#contact"
                data-aos="fade-up"
                data-aos-delay="2000"
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="hero__image" data-aos="zoom-in" data-aos-delay="200">
            <img style={{opacity:"60%"}} src={Myself} alt="me" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
