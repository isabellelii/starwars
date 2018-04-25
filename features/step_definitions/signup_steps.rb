Given("I visit the site") do
  visit root_path
end

Then("I click {string}") do |link|
  click_link link
end

Then("I fill {string} with {string}") do |input, value|
  fill_in input, with: value
end
