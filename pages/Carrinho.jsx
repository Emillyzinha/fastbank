import { useLocation } from "react-router-dom";
import Footer from "../componentes/Footer";
import Nav from "../componentes/Nav/Nav";
import SecaoProduto from "../componentes/SecaoProduto";
import { useEffect, useState } from "react";
import axios from "axios";
import Botao from "../componentes/Botao";


function Carrinho() {
    const location = useLocation()

    const [img, setImg] = useState('')
    const [nomePlanta, setNomePlanta] = useState('')
    const [valor, setValor] = useState('')
    const [testeLista, setTesteLista] = useState([])
    const [total, setTotal] = useState(0)
    const carrinhoStorage = JSON.parse(localStorage.getItem('carrinhoProdutos'))

    useEffect(() => {
        if (location.state != null) {
            axios.get('http://127.0.0.1:8000/plantae/plantas/')
                .then((res) => {
                    if (location.state == null) {
                    } else {
                        let plantaID = location.state.idPlanta
                        const produtoSelecionado = res.data[plantaID]
                        setImg(produtoSelecionado.imagem)
                        setNomePlanta(produtoSelecionado.nome)
                        setValor(produtoSelecionado.valor)
                    }
                })
                .catch((err) => {
                    alert('Deu errado irmão')
                })
        }

        let valorTotal = 0
        let valorTotalProdutos = 0
        carrinhoStorage.map((item) => {
            valorTotalProdutos = item.valor * item.qtd
            valorTotal += valorTotalProdutos
        })
        setTotal(valorTotal)
    }, [])

    const comprar = () => {
        alert('Compra feita com sucesso')
        localStorage.clear()
    }

    const aumentarProduto = () => {
        let quantidade = 0
        carrinhoStorage.map((item) => {
            item.qtd += 1
            console.log(item.qtd);
        })
        localStorage.setItem('carrinhoProdutos', JSON.stringify(carrinhoStorage))
    }

    return (
        <>
            {location.state == null ?
                <p>Você não um item</p>
                :
                <div className="h-screen w-full ">
                    <Nav />
                    <div className="flex flex-col bg-fundo-tela p-5">
                        <p className="text-5xl text-verde-padrao mb-2 font-titulos font-bold">Carrinho</p>
                        {
                            carrinhoStorage.map((item) => {
                                return <>
                                    <SecaoProduto img={item.imagem} nome={item.nome} valor={item.valor} qtd={item.qtd} aumentar={() => aumentarProduto()} />
                                </>
                            })
                        }
                        <div className="border w-full mt-10" />
                        <div className="flex flex-row p-3 justify-between">
                            <h3 className='font-textos font-semibold text-3xl'>Subtotal</h3>
                            <h3 className='font-textos font-semibold text-3xl'>{total}</h3>
                        </div>
                        <div className="w-full flex justify-center mt-3">
                            <Botao textoBotao='Comprar' onClick={() => comprar()} />
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </>
    )
}

export default Carrinho
