export default function Tabela() {
    let contato =
        [
            {
                nome: 'Alisson',
                telefone: '85 96633-4466',
                cidade: 'Maracanau-CE'
            },
            {
                nome: 'Sintia',
                telefone: '85 96633-4466',
                cidade: 'Maracanau-CE'
            },
            {
                nome: 'Keila',
                telefone: '85 96633-4466',
                cidade: 'Maracanau-CE'
            }
        ]


    return (
        <>
            <hr />

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    {contato.map((cont) => {
                        return (
                            <tr>
                                <td>{cont.nome}</td>
                                <td>{cont.telefone}</td>
                                <td>{cont.cidade}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}