"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Aca va la <br /> MEMA
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Gatos pepinos y guitarras, el orden lo elegis vos.
            </Typography>
            <Typography className="mb-4" color="white" variant="h6"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Enfrascate el pepino que mas te guste
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                <Image
                  width={256}
                  height={256}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAxlBMVEX///9VmDMufjB/ukIrfDBXmjNUlzNOkzIxgDBIjzJBijEzgTA4hDE+iDEtfi9FjTIGcwxopzpPlSlGkRkadx0QdBRIkh53sz9xrj0neykAcQBQliza59VenT9dnjasyqCIsInF2bz1+PXM3sWEvkPr8uulwqaJtXauyK+mxpnm7+JUkVWTuoLA1reFrobQ39F+rmljmWRrpFHD1sNmoUo5hDt7p3y70byUt5V1qV2RuYDa5ts/jgZhojtblVx5rGNJjEtvoHAKROSKAAAPTElEQVR4nO2dCVPbyBKAkazDp2xsGRDmCOZKDASShSXZhBz//089SZY03T3TI+OkZsQr9W5tbWJTNR9994xGOzuttNJKK6200korrbTSSiuttPK2ZHl09+H666PjO8efH25Pz46Wtlf0V+X89nE225tOF04mi8V0ujebHd/eXdpe2N+Ro/9SuMCRJcU8/rCyvbw/lrPH2e7BwcGuo2JMKWfHV2/aXs+PZ7udtfhKwgxy8vHNMq6+zvxOKQdrHj8XSOj3kvkX20vdTm6/L04qwM5+kNEF4Xg06ocYsevG7r3t1b5ezhfTQGiw09l1nHDU9VJxPa8PEf2+50aTd7YX/Fq5njlOsA8Iw1HKVglSYpB9EN+8KW888qfpwneBjQ4AnusOsJkOsr9LkjeUHk+/56o5KPkuXjwE6IUommZmmko0/2Z74ZvKw97a+Aojvej0MV83JKkjXH8eTd4G4uXxtHCvQocnUIHp/499mhv94sMofguGejRbVAvP9PcSeQCvO+o5cu73h8UXEtf28uvlbAZipPMSuICve7KfIu9LgKUjZoifbAPUyd139coz/b1cFNWNVKL6vep78/e2EfRyOkMLHwLAHqxuqITVF6N5o10RAfpBFwCWClQTOuKbjbZTDBjC/ACrm12FI3bFlyfNLVGRD/ohUOCwA0XRR62rmkKJv2yDcHLOAvYvIOBB2KMZX6SLPNg0VImrGQc4hoAXBwOP9BaUsIGeuLxc7iwXHGAPAb7kn3R1hO5hw8Lp3efZbLY4XjCAY2ihFyfrTwaUcAAJ4yvbTFAuj/cWDlku8kEYRS+KT2Qr7ULCRsWayynlS4s1kCbGuxCwLF1I9+TAfJjJpEHN8KMM6Ah9eD0H2ui45KBGuu7ygZk+2+aq5HRP4gOlmtfzTxQazP6et+vcTN/ZBqtEATiCgA4wUkEhqdAfE8Ib22ClnEmEYK0ZoBhkdIQhennCh2NTnCyyTtg2WSm3Uwoo2iBvnAGUOtx3xPqH6Qe+0xuNxmUz7EeY0G1Mg/GZxBngT2vAoPDDA0ckPC/IfxPpNz23KN+IG6aETRnYSG2QwCgyXnCQVTQnDvDO9JPKWb1A5YZpMP3HNloh1EYrRXmj0seCl92TwBHGmxVsgGjoK9ywQYTHTBj1hiJaBtk/oMjJDBP8Mf8OVWFzEuI1KrfHXDoANVluo2MIjMJTRdiQac0S6hBEmS4xXuGEOTs0ypxQMtLGEMJ+AlSjXkD2B7HKUCORhZpAUmFTrPQzzIbCEj3SwUMnzFMIJBz4ikjalEjzgACHXNEJedYByB8J5PTLuHNaSyPy4S2s2MToV+QJ+kkqxd+F8MuKOJMSNqB9OlWPZWCeIPFHmG8ZevIvK+KMGyW28dKaG03vhavRAQwoR0Fj7/ddz/O6uT1LFVsqyW/bfDtHeHtCeBKp46CCoHZ9JwxDX13PuE1IFpfM9gQNoyhMEuX6xCehTGy3FktfXcuskwEQlRPyShZu+MsyIG6a/JALo6hao/D0h5GR2p4mXqPOXtQy0hAUtExDJSCZkzbFSMkeoVgjjTK4ZVICqnKhm/ywC3iGAUdclEHVmvpgIswlQOZ2SzaSJzQTQjC3oJ9Jvx4o0ZNVwBWermmijKjWpBm+9NNI7CbDJR7ii2ApRZmwNsowYcZuxbY8xoBivE1XD5ywSz+TtdwcFeJdCpDqaZTx8fBQKWobteuFqOWFqV6KMiATqmsZzkbtBtKfeMJdpXo5yoDRvrqWYW3U0o7F0YeHn//dXZNNio2iDIVXfAfJxMbTCZdfZ9PFYkq2ekHJTB0N7JBKu0yK70CJbRxpB2cNESAbZcAOqQRf/bjaCSMbRxNX35UrHLEdE1AuH2WUxYyl41DHSg2O+FoG75CqAZUFd2qjHy0A3sm7vIhCOhizSRhlooydVFhnY3zHxIdRJsq4hzaGpOgolwwozWWAdrhqFEUiKHMrnb3CSHWAQDtcNcqFUVun2T7QjXp0mETqeYF22DA6ZJzQUkshH0XQAMJy+7V5wtqjFlSHWsDhBnlCXY2mmdBWz0R1CJ5ekgDxYQQ1oGIjLRcrmTCTD3jqpPMzCMjmCSbT25uuXRNAca6nG1BAMJZhpxZMpncTW13v1z28PrEkGXD8B4C2nnaqHtCS1ucNdObHNUwsoGspjB6RqVpPoyS4eIm+/A5Xq7mHduYWeAdUb4UQkC1lWEBLeQIHURRHpECJHZQDZIpRd2Jnn+maAGozAdBOxAFy1bZr50n85Wdcb8NiRZHLxeIjGmIrYaptd/7OBuDKxzEmEIWMoqkFxSgL6A+4UuZfG4DnJMbAR9DkchPolwdk2glLgKcUED7f8/8ASGMMOigpA4KBzasB5zYAl49TjkAJ2AeAaj62IXTnNtqJI/oIE/z1KwCFgvmZBQc4sZEm7oiFgud4vYFshGCHmyvVNIA2Ev0tAYRBVNEv8Kf1wHe4lt7GCdnlV5LmYYxR5Pk/ArRxfnS1IFtLI22WSGu1sh1mO3oNoIWt7Du6/6KPMaCUYWcyOkDz57qoC4JOQBVjQJJjp2r81Cm3UrM94fKRuCCsY5Q2WKmHnYvqAV2zz6aRbh7HGOX+kfgVbAtoNBmSQhSnMDVBoDPgDQDNPsn8QFwQxBiOoNjl5YOoHjCKfxk8ib/ySSEaghjDEBS1DLsBqpn8ZhswsdF67ZRsD+KrArhmQWfAOsBoPp/EN0YvgnyggONaFyy+5A0Vtz3VACbR/Tezo98jn24sjWpd0Mm90HPZLKjRoPEL56QYCmMMH0SyoUufVyAPaHp0TwttHGM0Ksq+qvmUBzR8nOucXmcBY0zEB5E64YOM4WbilhbaaGqvscE3Arg6phYa6Ge+fwxoeHfp9Du1UP1A7S8AGj2udvlZp8AsSQTMtc3bArqHRgHv6FlKpMAsSQQnu4oL1f4A0KgGlz+lMm2A6rSguDf29VpkTdToBujZHq1iUA8Q+uVFHZ3d1yLyPmgS8FqrwCG8Fve1dsq1S0YB5TIUTooyCwV3U79Sh2w/eGhwLvqBlqEhvJmym1oovJWLI/GVFRsLODEHuHqkOQIpMHssHt6rJt+huuYL+/2xYrzPApqbitIcgRSYhxioQHE7ZXZLvA9/yFPdeWj/NN6SzmKwAtMQgxTY6bxUTAOvujyu0hSZ4vOAxqa+R1NpFgPX1KMKLMOMH2bFTvlgFjwyBJurBgCSEEMVGFAFlk5Y6Kw8xAWvWAFKtL99Jp0cQQrMcgRRYAFYnsAoK3FM4jcHkOzq+mhFaZ0tKbAw0dImxTgDklQPWdjf4aUWihXYlxXYOQnQyksWXJSV2PwhBFOAP/EBUazAbigrcJ0mwBmhMi9i5y0t1zbgyiEHRGsVuB8E+Rerzc9QaY5l8OFOOpkCPEOt/CYKxC6IsgK9gAzvMdoBJIfQsQJHjqzAzkuA7REVL+Dmyvyv4TkGO4CojCEKjFQK3F+7oBgLk7fdVBXNGpDdezF02nCJLxrbQIEHhQuKO8mUN1oV83zNIQszgJcoxpDl9BxHUqDkgsqjwKNh8foNNg2aAlxN0d3aSIFDlQL3ffqrUG5cFN0hPHBqB/AIuSDq3bLoKCuwsFB/w50ZNsaYOowHAeEsdF1mn0h8ZQwN8QWVLCC/v2tKg6BQw7/urMw+kPhKC4XXN/L71xoXtAIILTQvs2UFlr1g3SGv0iZYFzQWZKCJjuqqtKrQhgvX7FxoXNBYmoBZArpgmuTZEENcSwOoOUNiqpIB1wPAsjEbxShCTKFApGv2uLbWBY0BgutVEKDSQg+cMoYCCx2wu6M6FzRXbO+pAUNVEtxF05hS1xoX1JxyMtXRw0dBAGBXlQTLHIHzJZ8GdWdFjc1klkKDsDoZqMq0UoE9WvAwfA7XzeeApga/4lpffF+hopX3Cw/E6+ZPUmqShBsZ23wRl/2Rq9IkwN11Geogw9v2JKXB7TPQTohlp4C0jikV2HMRIH8cXWuhBo+RiDiKb7enlWihwBCHfo0LhvTVE1CSyNhRLhBm8MtO0AtrCwX6Ac7dac+x5WFmg0dhxf0V4Jqm7I9Ihy/rPpC895Q/aKi3UDc2ed8KyPWVjeaxMTi5IAbaizDgiC9jwkgHaPQtzOKNNuI5gaLJK5LFfjGJoQ443K7QzrKE0cdeforXt5aBoSrAgsA/8YNA6YBdTSuot9AkNnrQaSnnQnTjZFHBSA4ov5gXWqiGz02ezJ6HPQepoli9XGKSrV/P7WtOwmrrUMMxJhMQScuSWzY6ZKCe/iRzoLVQC296FzeIF5FUvuqvh+1Tx6evQzNA8zdZCCMtX+HNXwBUy6ft5d0sxph/OlLc418EeKJCcvxJE1/olxVi9JGeUsSArQg0XQIoeo0s/+nP4WuToKWH6HeOhJXmJRupo0WV4/br+PRJME3zdu5aOSeERIW5VjzPHdXg1YYY02meJaStUDDqDoaZ9ur4akKMHRdUEcpviPSZU5NEgfoQY8kFcxG7TVkpsuXzBDVVjOlKG8sKlqXbPRGinffmLpjYfMeUKLxTTWh2xjSANTnCjW/svmIKbmpvAVhThmZ1mq2LG0t5UN3XvDkgv6tbAlp/k53ivcN/T4FuEtl/zdtqtv3zdHUe6MY/GvCWt51Rbxv/k8c2CrFzo5ok75KsJns1X10OzEzUyp14snyb6MdmjAJripjcRm2/PquUp2xupBl9KvhqI8ya0HoYLeR9nC3H0xwzIHxOvYHmYvsFYUKS9fBvs5ot5XM3A7T/FrtKruL1kjRb8SWeH2zKl0bSphjpTqVEzd1pa7xs53dTPlvvtVHL87xcFn/BX4o32lh9GeBTE5J9JTdJhaiE88PeZniFMUTJxM7bCli5nFQ7DYOipfcLccJef+huaJxJPJ/HcfqfH414rzKUq8pO0+RfSG/cHw3zxwY3NMxo/ml5ef/8/vm+UQZayKfKTl1PyIZoBaClq5k3lGWk3RHbQOIn+42SVi7nf4SYWLlT9HVyP9meL5rf2Hjn2Wvl/nBbLcZRg8oXndxvZahR3JguqV6+xUk9EdXf/EsTcwMny5v4tfp7U3yZfDncXI3J3H079ink26/NvDGK558aV5ptKM9JXMeY4j1dNaaD30LeP801tprEk6cvDa9f6uWfT5M4UWgybR4mN1dvHi+X5fPvJO2EkpQzyv5NkrQrin98aWTfsLWsnr/8e5PqLY67v35/vPrnLVRmrbTSSiuttNJKK6200korrbSC5X+0xSk4PESfwwAAAABJRU5ErkJggg=="
                  alt="metamask"
                  className="w-6 h-6"
                />
                Un gato random
              </Button>

              
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="https://ugc.production.linktr.ee/7d164363-4f95-4877-a048-3aee9c45e9bd_KPVok-m-JqxKG5wD7HaXc5RyYDPPHHZpQP4KquV8fD9er0mGEkZ-9UuQojBehXz6aCxUt0RI-s800-c-k-c0x00ffffff-no-rj.jpeg?io=true&size=thumbnail-feature-v1_0"
            alt="team work"
            className=""
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-green-500 p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Guitar pickle app
          </Typography>
          <Typography
            variant="paragraph"
        
            className="font-normal !text-gray-500 lg:w-5/12"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Perdete el pepino en el *
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
