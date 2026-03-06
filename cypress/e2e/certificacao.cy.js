const url = "https://qualidade.apprbs.com.br/certificacao";

describe("Infra", () => {
  it("Site deve estar no ar (status 200)", () => {
    cy.request(url).its("status").should("eq", 200);
  });
});

describe("Qualidade Certificação", () => {
  beforeEach(() => {
    cy.visit(url);
  });
  it("Deve abrir o site e mostrar a página inicial", () => {
    cy.url().should("include", "/certificacao");
  });

  it('Botão "Saiba mais" deve conter link válido e ser clicável', () => {
    cy.contains("a", "Saiba mais")
      .first()
      .should("be.visible")
      .invoke("attr", "href")
      .should((href) => {
        expect(href, "Precisa de link").to.exist;
        expect(href).to.not.be.empty;
        expect(href).to.not.equal("#");
      });

    cy.contains("a", "Saiba mais").first().click();

    cy.url().should("not.include", "/certificacao");
  });

  it('Todos os botões "Quero me certificar" devem ter link correto', () => {
    cy.get("a")
      .filter(':contains("Quero me certificar")')
      .each(($btn) => {
        cy.wrap($btn)
          .should("be.visible")
          .invoke("attr", "href")
          .should((href) => {
            expect(href, "Deve conter o link correto da Rubeus").to.eq(
              "https://rubeus.com.br/",
            );
          });
      });
  });

  describe("Formulario", () => {
    it("Deve preencher os dados iniciais e tentar avançar para a próxima etapa", () => {
      cy.get("#rbFormEtapa1").should("be.visible");
      cy.get('input[name="pessoa.nome"]').click().type("caio");
    });

    it("Botão desabilitado com telefone inválido", () => {
      //email obrigatorio
      cy.get('[placeholder="email@exemplo.com"]')
        .clear()
        .type("teste@email.com");

      cy.get(".iti__tel-input").clear().type("xxxx");

      cy.get(
        '[name="rbFormEtapa1"] > [name="rbActionsFormContainer"] > [name="rbBtnNext"]',
      ).should("be.disabled");
    });

    it("Botão habilitado com telefone válido", () => {
      //email obrigatorio
      cy.get('[placeholder="email@exemplo.com"]')
        .clear()
        .type("teste@email.com");

      cy.get(".iti__tel-input").clear().type("11120547551");

      cy.get(
        '[name="rbFormEtapa1"] > [name="rbActionsFormContainer"] > [name="rbBtnNext"]',
      )
        .should("not.be.disabled")
        .click();
    });
  });
  describe("Validações", () => {
    it("Email valido", () => {
      //email obrigatorio
      cy.get('[placeholder="email@exemplo.com"]')
        .clear()
        .type("teste@email.com");
      cy.get(
        '[name="rbFormEtapa1"] > [name="rbActionsFormContainer"] > [name="rbBtnNext"]',
      )
        .should("not.be.disabled")
        .click();
    });
    it("Email com caracteres invalidos", () => {
      //email obrigatorio
      cy.get('[placeholder="email@exemplo.com"]').clear().type("xxxxxx");
      cy.get(
        '[name="rbFormEtapa1"] > [name="rbActionsFormContainer"] > [name="rbBtnNext"]',
      ).should("be.disabled");
    });
  });

  describe("Links externos", () => {
    it("Verificar se os links dos icones correspondem as redes sociais corretas", () => {
      cy.get("#io0o4o")
        .should("have.attr", "href")
        .and("include", "https://www.facebook.com/CanalRubeus");

      cy.get("il7i3x")
        .should("have.attr", "href")
        .and("include", "https://www.instagram.com/canalrubeus/");

      cy.get("i2m2tn")
        .should("have.attr", "href")
        .and("include", "https://www.linkedin.com/company/rubeus/");
        
      cy.get("ifpwp7")
        .should("have.attr", "href")
        .and("include", "https://www.tiktok.com/@rubeusoficial");

      

    });
  });
});
