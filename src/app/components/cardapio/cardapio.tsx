"use client";

import { useState, useEffect } from 'react';
import CardPrato from './card';

import { Prato } from '../types/types';


function Cardapio() {

    const listaCategorias = [
    'Tudo',
    'Combos',
    'Burgers',
    'Acompanhamentos',
    'Porções',
    'Bebidas',
    'Molhos',
    'Sobremesas'
    ];

    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Tudo');

    const [pratosFiltrados, setPratosFiltrados] = useState<Prato[]>([]);

    const [pratos] = useState<Prato[]>([
  // Combos
  {
    id: 1,
    imagem: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$ksXb0fyM/200/200/original?country=br',
    titulo: 'Combo Clássico',
    categoria: 'Combos',
    precoOriginal: 'R$ 39,90',
    precoFinal: 'R$ 34,90',
    descricao: 'Hambúrguer clássico, batata média e refrigerante.',
  },
  {
    id: 2,
    imagem: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$k7XnunEc/200/200/original?country=br',
    titulo: 'Combo Duplo',
    categoria: 'Combos',
    precoOriginal: 'R$ 49,90',
    precoFinal: 'R$ 44,90',
    descricao: 'Dois hambúrgueres, batata grande e refrigerante 600ml.',
  },

  // Burgers
  {
    id: 3,
    imagem: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$k6X0kr6l/200/200/original?country=br',
    titulo: 'Hambúrguer Clássico',
    categoria: 'Burgers',
    precoOriginal: 'R$ 19,90',
    precoFinal: 'R$ 14,90',
    descricao: 'Carne bovina, queijo, alface, tomate e molho especial.',
  },
  {
    id: 4,
    imagem: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kzXWKJ6A/200/200/original?country=br',
    titulo: 'Cheeseburger Bacon',
    categoria: 'Burgers',
    precoOriginal: 'R$ 24,90',
    precoFinal: 'R$ 19,90',
    descricao: 'Hambúrguer com queijo cheddar, bacon crocante e maionese da casa.',
  },

  // Acompanhamentos
  {
    id: 5,
    imagem: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kMXFAQwe/200/200/original?country=br',
    titulo: 'Nuggets 10 un.',
    categoria: 'Acompanhamentos',
    precoOriginal: 'R$ 14,90',
    precoFinal: 'R$ 12,90',
    descricao: 'Croquetes de frango empanados, acompanha molho.',
  },
  {
    id: 6,
    imagem: 'https://www.shutterstock.com/image-photo/fried-onion-rings-mozzarella-plain-600nw-2512544059.jpg',
    titulo: 'Anéis de Cebola',
    categoria: 'Acompanhamentos',
    precoOriginal: 'R$ 13,90',
    precoFinal: 'R$ 10,90',
    descricao: 'Anéis de cebola empanados e fritos, super crocantes.',
  },

  // Porções
  {
    id: 7,
    imagem: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kvX4h9AE/200/200/original?country=br',
    titulo: 'Batata Frita Média',
    categoria: 'Porções',
    precoOriginal: 'R$ 11,90',
    precoFinal: 'R$ 9,90',
    descricao: 'Batata frita crocante com tempero especial.',
  },
  {
    id: 8,
    imagem: 'https://media.istockphoto.com/id/1319281000/pt/foto/super-crispy-fried-cassava.jpg?s=612x612&w=0&k=20&c=YL2Ddt_VpJ0gtZEH2JbleB_8p9BQ2JlsGHsiXdlLrag=',
    titulo: 'Mandioca Frita',
    categoria: 'Porções',
    precoOriginal: 'R$ 13,90',
    precoFinal: 'R$ 11,90',
    descricao: 'Porção de mandioca frita com alho e salsa.',
  },

  // Bebidas
  {
    id: 9,
    imagem: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kNXMLd8s/200/200/original?country=br',
    titulo: 'Coca-Cola 350ml',
    categoria: 'Bebidas',
    precoOriginal: 'R$ 6,00',
    precoFinal: 'R$ 5,00',
    descricao: 'Refrigerante gelado para acompanhar sua refeição.',
  },
  {
    id: 10,
    imagem: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kNXkpLzq/200/200/original?country=br',
    titulo: 'Suco Natural 300ml',
    categoria: 'Bebidas',
    precoOriginal: 'R$ 7,90',
    precoFinal: 'R$ 6,90',
    descricao: 'Suco natural da fruta, sem conservantes.',
  },

  // Molhos
  {
    id: 11,
    imagem: 'https://img.freepik.com/fotos-premium/molho-de-churrasco-em-tigela-isolada-no-fundo-branco_711700-792.jpg',
    titulo: 'Molho Barbecue',
    categoria: 'Molhos',
    precoOriginal: 'R$ 3,00',
    precoFinal: 'R$ 2,00',
    descricao: 'Molho barbecue artesanal defumado.',
  },
  {
    id: 12,
    imagem: 'https://st4.depositphotos.com/6591208/23141/i/450/depositphotos_231416690-stock-photo-pink-shrimp-sauce-bowl-isolated.jpg',
    titulo: 'Molho Rosé',
    categoria: 'Molhos',
    precoOriginal: 'R$ 3,00',
    precoFinal: 'R$ 2,00',
    descricao: 'Molho à base de maionese com ketchup e temperos.',
  },

  // Sobremesas
  {
    id: 13,
    imagem: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kpX0NLJ6/200/200/original?country=br',
    titulo: 'Casquinha ',
    categoria: 'Sobremesas',
    precoOriginal: 'R$ 16,00',
    precoFinal: 'R$ 13,90',
    descricao: 'Bolo de chocolate com recheio quente e sorvete de creme.',
  },
  {
    id: 14,
    imagem: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$McFlurry.png/200/200/original?country=br',
    titulo: 'Flurry KitKat Chocolate com Coco Caramelo',
    categoria: 'Sobremesas',
    precoOriginal: 'R$ 10,00',
    precoFinal: 'R$ 8,00',
    descricao: 'Sorvete artesanal com calda de chocolate.',
  },
    ]);


    useEffect(() => {
        if (categoriaSelecionada === 'Tudo') {
            setPratosFiltrados(pratos);
        } else {
            const pratosFiltrados = pratos.filter(prato => prato.categoria === categoriaSelecionada);
            setPratosFiltrados(pratosFiltrados);
        }
        
    }, [categoriaSelecionada, pratos]);

    

  return (
    <div className='w-full flex flex-col gap-5 bg-gray-50 h-screen pt-10'>
        <h1 className="text-5xl font-bold text-gray-800 text-center">Cardápio</h1>

        <div id='categorias' className='w-full'>
            <ul className='flex justify-center items-center gap-10'>
                {listaCategorias.map((categoria, index) => (
                <li
                    key={index}
                    onClick={() => setCategoriaSelecionada(categoria)}
                    className={`text-xl font-bold text-gray-800 cursor-pointer pb-2 ${
                    categoria === categoriaSelecionada ? 'border-b-2  border-amber-500' : ''
                    }`}
                >
                    {categoria}
                </li>
                ))}
            </ul>
        </div>

        
        <div className="w-full bg-amber-50 px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">

                {pratosFiltrados.map((prato) => (
                    <CardPrato
                    key={prato.id}
                    id={prato.id}
                    imagem={prato.imagem}
                    titulo={prato.titulo}
                    precoOriginal={prato.precoOriginal}
                    precoFinal={prato.precoFinal}
                    descricao={prato.descricao}
                />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Cardapio