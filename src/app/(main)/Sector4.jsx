/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { useBackground } from "../../context/BackgroundContext";
import { useEffect, useRef } from "react";

/**
 * 명예의 전당 - Sector #4
 */
export default function Sector4() {
  const { setSector } = useBackground();
  const wrapperRef = useRef();
  useEffect(() => {
    const scrollHandler = () => {
      if (!wrapperRef.current) return;
      if (wrapperRef.current.getBoundingClientRect().top < 100) {
        wrapperRef.current.classList.add("visible");
        setSector(4);
      } else {
        wrapperRef.current.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Wrapper ref={wrapperRef} id="sector-4">
      <h2>명예의 전당</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rem
        voluptate vitae sequi dolor similique amet facilis, ut esse quibusdam
        ad, vero dolorum pariatur numquam nobis doloremque repudiandae eaque
        vel? Saepe aut placeat architecto debitis ad ducimus dolores maxime ipsa
        officiis similique illum nihil harum libero dolor temporibus nulla
        laborum consectetur eveniet numquam nemo veniam, ut odit explicabo.
        Velit, tempora. Molestiae saepe id ratione placeat? Ratione deserunt
        quas nulla? Temporibus dolore, at sint, tempore maiores fugit nesciunt
        totam sit nihil optio repellat labore aspernatur culpa pariatur,
        similique vel impedit velit. Sequi temporibus aperiam tenetur. Unde
        similique fuga corporis nobis vero ipsum recusandae eius et voluptatum,
        facilis, natus maxime tempore, cupiditate officia itaque cum dolores. Ea
        dolores omnis eaque laboriosam vero? Voluptatum eligendi praesentium rem
        beatae unde optio reprehenderit aliquam! Labore exercitationem, dolorem
        amet nihil accusamus enim, harum placeat eaque quaerat aliquam ipsa,
        officiis error eum consectetur facilis in dignissimos sapiente! Laborum
        assumenda, amet dolor repellendus laboriosam veritatis, nam repellat
        molestias temporibus saepe excepturi quasi quo modi, possimus facilis
        sunt iste culpa commodi quos praesentium eum? Illo quas dolorum nobis
        accusantium! Iusto totam nesciunt ullam quis! Quae nam facere tenetur
        cum, ab repellat dignissimos accusamus hic aliquam ea dolorem ad omnis
        quaerat mollitia. Dolor impedit quidem sapiente delectus ut fugit
        mollitia. Itaque error sapiente dolores iusto? Sint accusantium autem
        placeat voluptates a perferendis nisi amet rem perspiciatis. Est ipsam
        error consequatur rerum illo sunt excepturi voluptatem quis consectetur,
        facere iusto possimus. Enim, cum veritatis! Delectus, doloremque.
        Voluptatum, impedit facere. Rem, temporibus deleniti. Nobis corporis
        sequi qui! Doloribus quidem error fugiat culpa pariatur voluptatum.
        Suscipit libero asperiores doloremque! Optio numquam tempore iusto!
        Praesentium at a dolores obcaecati asperiores molestias saepe odit,
        blanditiis harum nobis dicta magni? Commodi aspernatur inventore officia
        iure eos nisi quas ipsa in consequuntur libero! Totam, natus ut. Qui!
        Similique quis expedita libero magni, error ex delectus modi, hic
        labore, molestias eligendi. Necessitatibus, aliquam minus quam explicabo
        ab saepe natus nisi aperiam laboriosam quos corrupti molestiae. Iusto,
        enim saepe? Reprehenderit vel voluptatum dolore cum ad quasi itaque sed
        iusto! Possimus dignissimos libero molestias qui magnam, vitae deserunt
        voluptatum atque. Vero earum, harum eaque atque facilis quos minus
        delectus eos? Ex ducimus, expedita, praesentium numquam suscipit sequi
        illo voluptas, hic doloremque natus in obcaecati quam aut? Quibusdam
        aspernatur architecto doloribus atque iste consequatur, suscipit illum
        soluta? Eveniet neque tempora nihil? Sit modi vel molestiae ex earum id
        architecto eius. In, consequuntur! Dicta deserunt molestiae officiis rem
        optio dignissimos et ipsum expedita delectus? Porro sint exercitationem
        hic sit earum eveniet unde! Nihil exercitationem, ullam sit nesciunt
        error ad iste ipsum, suscipit quasi nam mollitia asperiores nostrum.
        Delectus incidunt necessitatibus ut recusandae atque voluptates aliquid
        vero iure dignissimos, voluptate obcaecati? Ullam, quisquam. Dolores
        placeat, vero voluptates, ab voluptas officiis culpa necessitatibus quo
        aliquid voluptate cum itaque vitae? Incidunt itaque perspiciatis tempore
        earum soluta amet debitis tempora distinctio ab quaerat, eveniet, modi
        ipsam. Deleniti ullam laudantium quidem numquam, voluptatibus non sed
        officia libero repellat possimus provident iure! Quo, sequi maiores
        quasi magnam aspernatur ut atque iste nesciunt aliquam exercitationem
        fugiat facilis pariatur velit? Delectus ut quo similique odio nihil unde
        laborum autem voluptatem esse nisi nulla consectetur natus temporibus
        vero perferendis, iure quisquam aut dolor. Assumenda voluptatem
        reprehenderit mollitia quod suscipit. Corrupti, illo! Esse, nisi? Autem
        temporibus totam repellendus sequi iste neque officia doloribus ad! Modi
        nostrum, a numquam exercitationem alias harum eius magni ipsa culpa.
        Atque fuga ducimus error, aspernatur ullam iure. Voluptas molestias cum
        adipisci architecto quos, doloremque eum eveniet et hic dolore,
        aspernatur voluptates praesentium ut magni officia atque expedita at
        voluptate perferendis, sit inventore quis. Placeat repellendus dolorem
        rem. Illum asperiores sint tenetur voluptatem quasi temporibus ex.
        Beatae perferendis possimus repudiandae optio vel ex, tempora illo
        deserunt tenetur, voluptatem illum fugit facilis quidem maiores sed est
        officiis ipsa ab? Voluptas provident quibusdam cumque corporis nostrum!
        Distinctio, laboriosam. Aliquam laborum ex incidunt facilis laudantium
        repellat aperiam quasi quidem impedit sit quaerat, blanditiis officiis
        voluptatibus maiores, aut recusandae. Vitae, in atque? Est repudiandae
        modi voluptates delectus blanditiis? Vel ex ullam voluptas est adipisci
        voluptatem dolores, voluptatum odio nemo modi molestiae, commodi
        reiciendis magni earum iste perspiciatis. Omnis exercitationem fugiat
        illum magnam? Aperiam delectus neque repellat impedit necessitatibus
        tenetur officiis tempora aliquid, dignissimos temporibus obcaecati
        officia! Excepturi ullam aut dolore vero aspernatur corrupti minus, sit
        sint illum, unde repellat veritatis ad provident. Deleniti unde sapiente
        in architecto laboriosam voluptate alias beatae labore incidunt
        pariatur? Aliquid ex aut iure impedit. Quasi commodi qui, ullam odit a
        nemo ab rem? Nemo doloremque veniam impedit! Saepe ratione aspernatur
        rem magnam aliquam ducimus. Recusandae id distinctio atque explicabo
        quod similique. Doloribus recusandae, distinctio reiciendis
        exercitationem omnis quae blanditiis ipsa deleniti quis. Corporis
        distinctio ad qui commodi. Ducimus pariatur similique laboriosam eos at
        porro corporis commodi quam soluta reprehenderit quibusdam enim ea eum
        et, saepe asperiores praesentium blanditiis ipsum tempora officia
        provident modi iste laborum! Praesentium, beatae. Autem saepe laudantium
        eveniet, odit dolores aliquam voluptatum, error aliquid adipisci tempore
        eligendi veritatis ea? Veniam reiciendis quod quisquam laboriosam dolore
        eveniet libero quos quasi voluptatibus pariatur. Illo, alias quod. Vero
        sint non nam possimus deleniti velit animi voluptates explicabo commodi
        culpa sapiente alias deserunt perspiciatis quasi, dicta id vel quae sit
        quidem exercitationem? Quia obcaecati architecto itaque odio voluptates?
        Voluptatum cum totam laboriosam esse aperiam provident possimus,
        assumenda mollitia ducimus explicabo, commodi vitae eius laudantium
        perferendis quas quod quos dolor natus. Accusamus, aliquid aperiam
        architecto iusto eum corporis asperiores?
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  padding: 100vh 0 8rem 0;
`;
