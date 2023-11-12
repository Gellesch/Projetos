public class main {

    public String name;

    static String nomeDoVideo = "começando do zero Java";

    protected int salary;

    public static void main(String[] args) {
        Ser meuSerAnimal = new Cachorro( nome: "Banguelo", idade: 5, nomeDono: William");
        Ser meuSerHumano = new Humano( nome: "William", idade: 34, sobreNome: "Gellesch");
        meuSerAnimal.setNome("William");
        System.out.println(meuSerAnimal.saudacao());
    }
}