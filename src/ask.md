1. liệu có gộp được 2 hành động fetch từ 2 nguồn api vô 1 action được ko?
2. Liệu có gộp được 2 type (failure, success) của 2 fetch vào được không?

Có 4 components khác nhau (1, 2, 3, 4)

Component 1: cần truyền các prop 1, pro 2

Component 2: sẽ nhét compnent 1 vào và nhét thêm props vô

component 3: sẽ lấy component 2 và truyền vào 1 số tag mới (p tag ...) để render ra

Component 4: sẽ lấy component 2 và truyền vào 1 số tag mói khác.

==> nên viết thế nào? Liệu có nên bỏ component 2 không? và nhét thẳng component 2 vào 3, 4 ?
